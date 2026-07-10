import os
import imageio_ffmpeg
import subprocess

vid_dir = 'public/vid'
poster_dir = 'public/vid_poster'

os.makedirs(poster_dir, exist_ok=True)

ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()

for filename in os.listdir(vid_dir):
    if filename.endswith('.mp4'):
        input_path = os.path.join(vid_dir, filename)
        
        # generate a poster name like "video-name.webp"
        poster_filename = os.path.splitext(filename)[0] + '.webp'
        output_path = os.path.join(poster_dir, poster_filename)
        
        # Extract the very first frame (00:00:00) as a highly compressed WebP
        command = [
            ffmpeg_path,
            '-y',
            '-ss', '00:00:00.100',  # take frame at 100ms in case 0ms is blank
            '-i', input_path,
            '-vframes', '1',
            '-q:v', '50',           # webp compression quality (lower is smaller file, range 1-100)
            '-c:v', 'libwebp',
            output_path
        ]
        
        subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"Generated poster for {filename}")
