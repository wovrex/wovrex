import os
import imageio_ffmpeg
import subprocess
import time

vid_dir = 'public/vid_original' # Read from the restored originals
compressed_dir = 'public/vid_compressed'

os.makedirs(compressed_dir, exist_ok=True)

ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()

for filename in os.listdir(vid_dir):
    if filename.endswith('.mp4'):
        input_path = os.path.join(vid_dir, filename)
        output_path = os.path.join(compressed_dir, filename)
        print(f"Compressing {filename} (keeping audio)...")
        
        # Scale down to width 640.
        # Use CRF 34 for high video compression.
        # Use -c:a aac -b:a 96k for audio compression.
        command = [
            ffmpeg_path,
            '-y',
            '-i', input_path,
            '-vf', 'scale=640:-2', # Downscale
            '-vcodec', 'libx264',
            '-crf', '34', 
            '-preset', 'veryfast',
            '-c:a', 'aac',
            '-b:a', '96k',
            output_path
        ]
        
        start_time = time.time()
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        duration = time.time() - start_time
        
        if result.returncode == 0:
            old_size = os.path.getsize(input_path) / (1024 * 1024)
            new_size = os.path.getsize(output_path) / (1024 * 1024)
            print(f"Success! {filename} reduced from {old_size:.2f}MB to {new_size:.2f}MB in {duration:.1f}s")
        else:
            print(f"Error compressing {filename}: {result.stderr.decode('utf-8', errors='ignore')}")
