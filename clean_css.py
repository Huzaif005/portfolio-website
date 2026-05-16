import re
import os
import shutil

def clean_css_content(content):
    css_parts = []
    
    # Use finditer to find all .push calls and extract the string argument
    # Pattern: .push([module.id, <quote>...<quote>
    # Note: we need to handle the fact that some might have more arguments like sourcemaps
    
    # Regex for strings in .push([module.id, ...])
    # It looks for .push([module.id, and then captures the next string literal
    # We use a negative lookbehind to ensure we don't stop at an escaped quote
    pattern = r'\.push\(\[module\.id,\s*(?P<quote>[`"\'])(?P<css>.*?)(?<!\\)(?P=quote)'
    
    for match in re.finditer(pattern, content, re.DOTALL):
        css_part = match.group('css')
        # Unescape quotes and backslashes that were escaped for the JS string
        css_part = css_part.replace('\\\\', '\\')
        css_part = css_part.replace('\\`', '`').replace('\\"', '"').replace("\\'", "'")
        css_parts.append(css_part)
    
    return "\n".join(css_parts)

# Restore from original extracted code
original_src = '../extracted_code/src'
if os.path.exists(original_src):
    print(f"Restoring from {original_src}...")
    for root, dirs, files in os.walk(original_src):
        rel_path = os.path.relpath(root, original_src)
        target_root = os.path.join('src', rel_path)
        os.makedirs(target_root, exist_ok=True)
        for file in files:
            if file.endswith('.css'):
                shutil.copy2(os.path.join(root, file), os.path.join(target_root, file))

# Clean
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.css'):
            path = os.path.join(root, file)
            print(f"Cleaning {path}...")
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            cleaned = clean_css_content(content)
            if cleaned:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(cleaned)
                print(f"Successfully cleaned {path}")
            else:
                print(f"No CSS content found in {path}")
