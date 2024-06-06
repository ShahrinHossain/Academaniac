import requests
from bs4 import BeautifulSoup
from flask import Blueprint, render_template, request, session, jsonify
import re
import os

uni_scrape = Blueprint("uni_scrape", __name__, static_folder="static", template_folder="templates")

def scrape_data(university_name):
    university_name = university_name.replace(" ", "_")
    url = f"https://en.wikipedia.org/wiki/{university_name}"

    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    academic_heading = soup.find('span', {'id': 'Academics'})
    if academic_heading:
        paragraph = academic_heading.find_next('p')
        if paragraph:
            research_text = paragraph.text.strip()
            # Remove footnotes like "[445]" using regex
            cleaned_text = re.sub(r'\[\d+\]', '', research_text)
            return {"research_text": cleaned_text}
        else:
            return {"error": "No paragraph found under the Academics heading."}
    else:
        return {"error": "Academics heading not found."}

@uni_scrape.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    university_name = data.get('name')
    if not university_name:
        return jsonify({"error": "Name is required"}), 400

    result = scrape_data(university_name)
    return jsonify(result)

def scrape_image(university_name):
    university_name = university_name.replace(" ", "_")
    url = f"https://en.wikipedia.org/wiki/{university_name}"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    image_folder = 'downloaded_images'
    os.makedirs(image_folder, exist_ok=True)

    def download_image(url, folder):
        try:
            response = requests.get(url, stream=True)
            response.raise_for_status()
            filename = os.path.join(folder, url.split('/')[-1])
            with open(filename, 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            return filename
        except Exception as e:
            print(f"Failed to download {url}: {e}")
            return None

    image_tags = soup.find_all('img', class_='mw-file-element')
    image_urls = []
    for img in image_tags:
        parent_figure = img.find_parent('figure')
        caption = parent_figure.find('figcaption').text if parent_figure and parent_figure.find('figcaption') else ""
        if university_name.lower() in caption.lower():
            img_url = img.get('src')
            if img_url:
                if img_url.startswith('//'):
                    img_url = 'https:' + img_url
                elif img_url.startswith('/'):
                    img_url = 'https://en.wikipedia.org' + img_url
                image_urls.append(img_url)

    downloaded_images = []
    for img_url in image_urls:
        print(img_url)
        downloaded_images.append(download_image(img_url, image_folder))

    return {"images": downloaded_images}

@uni_scrape.route('/scrape_image', methods=['POST'])
def scrape_image_route():
    data = request.get_json()
    university_name = data.get('name')
    if not university_name:
        return jsonify({"error": "Name is required"}), 400

    result = scrape_image(university_name)
    return jsonify(result)