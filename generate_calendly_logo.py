from PIL import Image
import os

input_path = "public/favicon.webp"
output_path = "public/calendly-logo.png"

# Open the favicon
favicon = Image.open(input_path).convert("RGBA")

# Resize the favicon to be larger if it is small, e.g., 800x800 for high quality
# Wait, if it's 512x512, just resize nicely
target_size = 1024
favicon = favicon.resize((800, 800), Image.Resampling.LANCZOS)

# Create a white background image of 1024x1024
background = Image.new("RGBA", (target_size, target_size), (255, 255, 255, 255))

# Calculate position to paste the favicon in the center
x = (target_size - favicon.width) // 2
y = (target_size - favicon.height) // 2

# Paste using the favicon's alpha channel as mask
background.paste(favicon, (x, y), favicon)

# Save as PNG
background.save(output_path, format="PNG")
print(f"Successfully saved to {output_path}")
