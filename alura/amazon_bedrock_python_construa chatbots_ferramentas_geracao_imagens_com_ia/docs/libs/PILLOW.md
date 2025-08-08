# Pillow (PIL)

## Visão Geral

Pillow é a versão amigável do PIL (Python Imaging Library), adicionando capacidades de processamento de imagens ao Python com amplo suporte a formatos de arquivo e recursos poderosos de processamento de imagens.

## Instalação

```bash
pip install --upgrade pip
pip install --upgrade Pillow
```

### Instalação com Dependências Opcionais

```python
python3 -m pip install --upgrade defusedxml olefile
```

### Construção a partir do Código-Fonte

```bash
python3 -m pip install --upgrade Pillow --no-binary :all:
```

## Uso Básico

### Abrindo e Exibindo Imagens

```python
from PIL import Image

# Abrir imagem
with Image.open("hopper.ppm") as im:
    im.show()  # Exibe a imagem
```

### Informações da Imagem

```python
with Image.open("hopper.jpg") as im:
    print(f"Formato: {im.format}")
    print(f"Tamanho: {im.size}")
    print(f"Modo: {im.mode}")
```

### Conversão de Formato

```python
with Image.open("hopper.ppm") as im:
    im.save("hopper.jpg")
```

## Processamento Básico de Imagens

### Redimensionamento

```python
# Redimensionar para tamanho específico
out = im.resize((128, 128))

# Thumbnail (mantém proporção)
im.thumbnail((100, 100))
```

### Rotação

```python
# Rotacionar 45 graus no sentido anti-horário
out = im.rotate(45)
```

### Recorte

```python
# Recortar região (esquerda, topo, direita, fundo)
box = (100, 100, 400, 400)
region = im.crop(box)
```

### Colagem

```python
# Colar imagem em posição específica
im.paste(region, (50, 50))
```

## Métodos de Redimensionamento Avançados

```python
from PIL import Image, ImageOps

size = (100, 150)
with Image.open("hopper.webp") as im:
    # Contém dentro do tamanho (mantém proporção)
    ImageOps.contain(im, size).save("imageops_contain.webp")
    
    # Cobre todo o tamanho (pode cortar)
    ImageOps.cover(im, size).save("imageops_cover.webp")
    
    # Ajusta exatamente (pode distorcer)
    ImageOps.fit(im, size).save("imageops_fit.webp")
    
    # Adiciona padding com cor
    ImageOps.pad(im, size, color="#f00").save("imageops_pad.webp")
```

## Filtros de Imagem

```python
from PIL import ImageFilter

# Filtros pré-definidos
im1 = im.filter(ImageFilter.BLUR)
im2 = im.filter(ImageFilter.CONTOUR)
im3 = im.filter(ImageFilter.EDGE_ENHANCE)

# Filtros parametrizados
im4 = im.filter(ImageFilter.MinFilter(3))
im5 = im.filter(ImageFilter.MedianFilter(3))
```

## Desenho em Imagens

```python
from PIL import Image, ImageDraw, ImageFont

# Criar imagem nova
im = Image.new("RGB", (200, 100), color="white")
draw = ImageDraw.Draw(im)

# Desenhar formas
draw.rectangle([10, 10, 50, 50], fill="red", outline="black")
draw.ellipse([60, 10, 100, 50], fill="blue")
draw.line([110, 10, 150, 50], fill="green", width=3)

# Desenhar texto
font = ImageFont.truetype("arial.ttf", 20)
draw.text((10, 60), "Hello Pillow!", fill="black", font=font)

# Texto com contorno
draw.text((10, 10), "A", "#f00", font, stroke_width=2, stroke_fill="#0f0")
```

## Melhoramento de Imagens

```python
from PIL import ImageEnhance

# Melhorar nitidez
enhancer = ImageEnhance.Sharpness(image)
enhanced = enhancer.enhance(1.5)  # 1.0 = original

# Melhorar contraste
enhancer = ImageEnhance.Contrast(image)
enhanced = enhancer.enhance(1.2)

# Melhorar brilho
enhancer = ImageEnhance.Brightness(image)
enhanced = enhancer.enhance(1.1)

# Melhorar saturação de cor
enhancer = ImageEnhance.Color(image)
enhanced = enhancer.enhance(0.8)
```

## Conversão de Cores

```python
# Converter para escala de cinza
gray = im.convert("L")

# Converter para RGB
rgb = im.convert("RGB")

# Converter para RGBA (com transparência)
rgba = im.convert("RGBA")

# Conversão customizada (RGB para XYZ)
rgb2xyz = (
    0.412453, 0.357580, 0.180423, 0,
    0.212671, 0.715160, 0.072169, 0,
    0.019334, 0.119193, 0.950227, 0
)
xyz = im.convert("RGB", rgb2xyz)
```

## Operações com Pixels

```python
# Acesso direto a pixels
with Image.open("hopper.jpg") as im:
    px = im.load()
    
    # Ler pixel
    print(px[4, 4])
    
    # Modificar pixel
    px[4, 4] = (0, 0, 0)
    
    # Usar índices negativos
    px[-1, -1] = (255, 255, 255)

# Obter caixa delimitadora
bbox = im.getbbox()
```

## Trabalhando com Arrays NumPy

```python
import numpy as np
from PIL import Image

# Converter imagem para array numpy
img_array = np.array(im)

# Processar array
processed_array = np.fliplr(img_array)  # Espelhar horizontalmente

# Converter de volta para imagem
processed_im = Image.fromarray(processed_array)

# Conversão para float32 para processamento científico
sound = sound.set_frame_rate(16000)
channel_sounds = sound.split_to_mono()
samples = [s.get_array_of_samples() for s in channel_sounds]

fp_arr = np.array(samples).T.astype(np.float32)
fp_arr /= np.iinfo(samples[0].typecode).max
```

## Expressões Matemáticas de Imagem

```python
from PIL import ImageMath

with Image.open("image1.jpg") as im1:
    with Image.open("image2.jpg") as im2:
        # Método seguro
        out = ImageMath.lambda_eval(
            lambda args: args["convert"](args["min"](args["a"], args["b"]), 'L'),
            a=im1,
            b=im2
        )
        
        # Método não seguro (mais simples)
        out = ImageMath.unsafe_eval(
            "convert(min(a, b), 'L')",
            a=im1,
            b=im2
        )
```

## Formatos de Arquivo Suportados

### Leitura
- JPEG, PNG, GIF, BMP, TIFF
- WebP, AVIF, HEIF
- ICO, PCX, PPM, SGI
- TGA, PDF (primeira página)

### Escrita  
- JPEG, PNG, GIF, BMP, TIFF
- WebP, AVIF, PCX, PPM
- SGI, TGA, ICO

## Criação de GIFs Animados

```python
from PIL import Image

# Lista de imagens
image_filenames = ["frame1.jpg", "frame2.jpg", "frame3.jpg"]
images = [Image.open(filename) for filename in image_filenames]

# Salvar como GIF animado
images[0].save(
    "animated.gif",
    append_images=images[1:],
    duration=500,  # duração de cada frame em ms
    loop=0,  # loop infinito
)
```

## Metadados EXIF

```python
from PIL import Image
from PIL.ExifTags import TAGS

with Image.open("photo.jpg") as im:
    # Obter dados EXIF brutos
    exifdata = im.getexif()
    
    # Iterar sobre dados EXIF
    for tag_id in exifdata:
        tag = TAGS.get(tag_id, tag_id)
        data = exifdata.get(tag_id)
        print(f"{tag:25}: {data}")
```

## Gerenciamento de Cores

```python
from PIL import ImageCms

# Carregar perfil de cor
input_profile = ImageCms.ImageCmsProfile("input.icc")
output_profile = ImageCms.ImageCmsProfile("output.icc")

# Criar transformação
transform = ImageCms.buildTransformFromOpenProfiles(
    input_profile, output_profile, "RGB", "RGB"
)

# Aplicar transformação
converted_im = ImageCms.applyTransform(im, transform)
```

## Configurações e Opções de Construção

### Via pip com configurações customizadas

```bash
# Compilação paralela
python3 -m pip install --upgrade Pillow -C parallel=4

# Desabilitar recursos específicos
python3 -m pip install --upgrade Pillow -C zlib=disable

# Habilitar recursos específicos
python3 -m pip install --upgrade Pillow -C raqm=enable

# Debug verbose
python3 -m pip install --upgrade Pillow -C debug=true
```

## Exemplo Completo: Processador de Imagens

```python
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw, ImageFont
import os

def processar_imagem(input_path, output_path):
    with Image.open(input_path) as im:
        # Redimensionar mantendo proporção
        im.thumbnail((800, 600))
        
        # Melhorar nitidez
        enhancer = ImageEnhance.Sharpness(im)
        im = enhancer.enhance(1.2)
        
        # Aplicar filtro de melhoria de borda
        im = im.filter(ImageFilter.EDGE_ENHANCE_MORE)
        
        # Adicionar marca d'água
        draw = ImageDraw.Draw(im)
        font = ImageFont.load_default()
        
        # Posição da marca d'água (canto inferior direito)
        width, height = im.size
        text = "© Minha Marca"
        
        # Calcular posição
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = width - text_width - 10
        y = height - text_height - 10
        
        # Desenhar marca d'água
        draw.text((x, y), text, fill=(255, 255, 255, 128), font=font)
        
        # Salvar imagem processada
        im.save(output_path, "JPEG", quality=95)
        print(f"Imagem processada salva em: {output_path}")

# Usar função
processar_imagem("input.jpg", "output_processed.jpg")
```

## Informações do Sistema

```python
from PIL import Image
import pillow_heif

# Verificar versão
print(Image.__version__)

# Verificar recursos disponíveis
from PIL import features
print("JPEG support:", features.check("jpg"))
print("PNG support:", features.check("png"))
print("WEBP support:", features.check("webp"))

# Listar todos os recursos
features.pilinfo()
```

## Links Úteis

- [Documentação Oficial](https://pillow.readthedocs.io/)
- [GitHub Repository](https://github.com/python-pillow/Pillow)
- [Handbook Tutorial](https://pillow.readthedocs.io/en/stable/handbook/tutorial.html)
- [Image File Formats](https://pillow.readthedocs.io/en/stable/handbook/image-file-formats.html)