import os
from PIL import Image, ImageDraw, ImageFont

artifact_dir = r"C:\Users\muaaz\.gemini\antigravity-ide\brain\cde28b3f-f791-47d2-b4a1-471b2590ed3c"
square_path = os.path.join(artifact_dir, "ad_square.png")
landscape_path = os.path.join(artifact_dir, "ad_landscape.png")

# Colors
bg_color = (12, 12, 11)
text_white = (248, 247, 243)
text_gold = (201, 161, 92)

try:
    font_large = ImageFont.truetype("arialbd.ttf", 64)
    font_medium = ImageFont.truetype("arial.ttf", 36)
    font_kicker = ImageFont.truetype("arialbd.ttf", 24)
    font_logo = ImageFont.truetype("arialbd.ttf", 48)
except:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_kicker = ImageFont.load_default()
    font_logo = ImageFont.load_default()

def draw_landscape():
    img = Image.new('RGB', (1200, 628), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Kicker
    draw.text((80, 80), "REVENUE INTELLIGENCE", font=font_kicker, fill=text_gold)
    
    # Headline
    draw.text((80, 140), "High HVAC revenue,", font=font_large, fill=text_white)
    draw.text((80, 220), "low profit margins?", font=font_large, fill=text_gold)
    
    # Sub
    draw.text((80, 320), "We analyze your existing call logs, CRM, and dispatch", font=font_medium, fill=(200, 200, 200))
    draw.text((80, 370), "data to find exactly where the money is quietly slipping away.", font=font_medium, fill=(200, 200, 200))
    
    # Logo
    draw.rectangle([80, 520, 140, 524], fill=text_gold)
    draw.text((160, 495), "wovrex", font=font_logo, fill=text_white)
    
    img.save(landscape_path)

def draw_square():
    img = Image.new('RGB', (1080, 1080), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Kicker
    draw.text((100, 100), "HVAC BUSINESS AUDIT", font=font_kicker, fill=text_gold)
    
    # Headline
    draw.text((100, 160), "Busy and", font=font_large, fill=text_white)
    draw.text((100, 240), "profitable", font=font_large, fill=text_white)
    draw.text((100, 320), "aren't the same.", font=font_large, fill=text_gold)
    
    # Sub
    draw.text((100, 440), "Stop guessing why margins are tight.", font=font_medium, fill=(200, 200, 200))
    draw.text((100, 490), "We find the exact dollars leaking", font=font_medium, fill=(200, 200, 200))
    draw.text((100, 540), "from your HVAC operations.", font=font_medium, fill=(200, 200, 200))
    
    # Box
    draw.rectangle([100, 650, 600, 800], outline=text_gold, width=2)
    draw.text((140, 680), "$1M - $20M+", font=font_large, fill=text_white)
    draw.text((140, 750), "REVENUE TARGET", font=font_kicker, fill=text_gold)
    
    # Logo
    draw.rectangle([100, 950, 160, 954], fill=text_gold)
    draw.text((180, 925), "wovrex", font=font_logo, fill=text_white)
    
    img.save(square_path)

draw_landscape()
draw_square()
print("Images generated successfully!")
