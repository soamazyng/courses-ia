# Pydub

## Visão Geral

Pydub é uma biblioteca Python para manipulação de áudio com uma interface simples e de alto nível. Permite trabalhar facilmente com arquivos de áudio de diferentes formatos.

## Instalação

```bash
pip install pydub
```

### Dependências Opcionais

Para trabalhar com formatos além de WAV, você precisa instalar FFmpeg ou Libav:

#### macOS (Homebrew)
```bash
# libav
brew install libav

# OU ffmpeg  
brew install ffmpeg
```

#### Ubuntu/Debian
```bash
# libav
apt-get install libav-tools libavcodec-extra

# OU ffmpeg
apt-get install ffmpeg libavcodec-extra
```

### Para Reprodução de Áudio
```bash
# Uma das opções abaixo
pip install simpleaudio
pip install pyaudio
# ou instalar ffplay/avplay
```

## Carregando Arquivos de Áudio

### Formatos Básicos

```python
from pydub import AudioSegment

# WAV (não requer ffmpeg)
song = AudioSegment.from_wav("never_gonna_give_you_up.wav")

# MP3 (requer ffmpeg)
song = AudioSegment.from_mp3("never_gonna_give_you_up.mp3")

# Outros formatos
ogg_version = AudioSegment.from_ogg("song.ogg")
flv_version = AudioSegment.from_flv("song.flv")

# Método genérico
mp4_version = AudioSegment.from_file("song.mp4", "mp4")
wma_version = AudioSegment.from_file("song.wma", "wma")
aac_version = AudioSegment.from_file("song.aiff", "aac")
```

## Operações Básicas

### Slicing (Fatiamento)

```python
# pydub trabalha em millisegundos
ten_seconds = 10 * 1000

# Primeiros 10 segundos
first_10_seconds = song[:ten_seconds]

# Últimos 5 segundos
last_5_seconds = song[-5000:]

# Dividir em fatias de 5 segundos
slices = song[::5000]
```

### Ajuste de Volume

```python
# Aumentar volume em 6dB
beginning = first_10_seconds + 6

# Diminuir volume em 3dB
end = last_5_seconds - 3
```

### Concatenação

```python
# Concatenar segmentos
without_the_middle = beginning + end

# Concatenar com crossfade
with_style = beginning.append(end, crossfade=1500)  # 1.5 segundo de crossfade
```

### Repetição

```python
# Repetir o clipe duas vezes
do_it_over = with_style * 2
```

### Efeitos

```python
# Fade in de 2 segundos, fade out de 3 segundos
awesome = do_it_over.fade_in(2000).fade_out(3000)

# Reverter áudio
backwards = song.reverse()
```

## Informações do Áudio

```python
# Duração em millisegundos
duration_ms = len(song)

# Duração em segundos
duration_seconds = song.duration_seconds

# Taxa de amostragem
sample_rate = song.frame_rate

# Número de canais
channels = song.channels  

# Largura da amostra (bytes por amostra)
sample_width = song.sample_width

# Volume em dBFS
loudness = song.dBFS
```

## Exportação

### Exportação Básica

```python
# Exportar como MP3
awesome.export("mashup.mp3", format="mp3")

# Exportar com bitrate específico
awesome.export("mashup.mp3", format="mp3", bitrate="192k")

# Exportar com tags
awesome.export("mashup.mp3", format="mp3", tags={
    'artist': 'Various artists', 
    'album': 'Best of 2011', 
    'comments': 'This album is awesome!'
})

# Exportar com parâmetros customizados
awesome.export("mashup.mp3", format="mp3", parameters=["-q:a", "0"])

# Mixar para dois canais e definir volume
awesome.export("mashup.mp3", format="mp3", parameters=["-ac", "2", "-vol", "150"])
```

## Reprodução

```python
from pydub import AudioSegment
from pydub.playback import play

sound = AudioSegment.from_file("mysound.wav", format="wav")
play(sound)
```

## Criação de Áudio

### Silêncio

```python
# Criar 10 segundos de silêncio
ten_second_silence = AudioSegment.silent(duration=10000)

# Áudio vazio (duração zero)
empty = AudioSegment.empty()
```

### Combinando Canais Mono para Estéreo

```python
left_channel = AudioSegment.from_wav("left.wav")
right_channel = AudioSegment.from_wav("right.wav")

stereo_sound = AudioSegment.from_mono_audiosegments(left_channel, right_channel)
```

### Construção Manual

```python
# Criar áudio a partir de dados brutos
sound = AudioSegment(
    # dados de áudio brutos (bytes)
    data=b'…',
    
    # amostras de 2 bytes (16 bit)
    sample_width=2,
    
    # taxa de quadros de 44.1 kHz
    frame_rate=44100,
    
    # estéreo
    channels=2
)
```

## Manipulação Avançada

### Acesso a Amostras

```python
# Obter array de amostras
samples = sound.get_array_of_samples()

# Modificar amostras...

# Criar novo som a partir de amostras modificadas
new_sound = sound._spawn(samples)
```

### Processamento com NumPy

```python
import array
import numpy as np

samples = sound.get_array_of_samples()

# Operação de exemplo nos dados de áudio
shifted_samples = np.right_shift(samples, 1)

# Converter de volta para array.array
shifted_samples_array = array.array(sound.array_type, shifted_samples)

new_sound = sound._spawn(shifted_samples_array)
```

### Conversão para NumPy Float32

```python
import numpy as np

sound = sound.set_frame_rate(16000)
channel_sounds = sound.split_to_mono()
samples = [s.get_array_of_samples() for s in channel_sounds]

fp_arr = np.array(samples).T.astype(np.float32)
fp_arr /= np.iinfo(samples[0].typecode).max
```

### Ajustes de Canal

```python
# Aplicar ganho diferente para cada canal
stereo_balance_adjusted = sound.apply_gain_stereo(-6, +2)

# Panning (-1.0 = esquerda, +1.0 = direita)
panned_right = sound.pan(+0.15)
panned_left = sound.pan(-0.50)
```

## Detecção de Silêncio

```python
from pydub import silence

# Detectar seções silenciosas
silence_ranges = silence.detect_silence(
    audio_segment, 
    min_silence_len=1000,  # duração mínima em ms
    silence_thresh=-40     # threshold em dBFS
)

# Detectar silêncio inicial
leading_silence_end = silence.detect_leading_silence(audio_segment)
```

## Exemplos Práticos

### Converter Vídeos para MP3

```python
import os
import glob
from pydub import AudioSegment

video_dir = '/home/user/videos/'
extension_list = ('*.mp4', '*.flv')

os.chdir(video_dir)
for extension in extension_list:
    for video in glob.glob(extension):
        mp3_filename = os.path.splitext(os.path.basename(video))[0] + '.mp3'
        AudioSegment.from_file(video).export(mp3_filename, format='mp3')
```

### Criar Playlist com Crossfade

```python
from glob import glob
from pydub import AudioSegment

playlist_songs = [AudioSegment.from_mp3(mp3_file) for mp3_file in glob("*.mp3")]

first_song = playlist_songs.pop(0)
beginning_of_song = first_song[:30*1000]  # primeiros 30 segundos

playlist = beginning_of_song
for song in playlist_songs:
    # Crossfade de 10 segundos
    playlist = playlist.append(song, crossfade=(10 * 1000))

# Fade out no final
playlist = playlist.fade_out(30)

# Duração da playlist
playlist_length = len(playlist) / (1000*60)

# Salvar
playlist.export(f"{playlist_length}_minute_playlist.mp3", format='mp3')
```

### Criar GIF Animado de Audio

```python
from PIL import Image

# Lista de arquivos de imagem
image_filenames = ["frame1.jpg", "frame2.jpg", "frame3.jpg", "frame4.jpg"]

# Abrir imagens
images = [Image.open(filename) for filename in image_filenames]

# Salvar como GIF animado
images[0].save(
    "animated.gif",
    append_images=images[1:],
    duration=500,  # duração de cada frame em ms
    loop=0,  # loop infinito
)
```

## Debug e Logging

```python
import logging

# Configurar logging para ver comandos ffmpeg
l = logging.getLogger("pydub.converter")
l.setLevel(logging.DEBUG)
l.addHandler(logging.StreamHandler())

# Agora você verá os comandos ffmpeg sendo executados
AudioSegment.from_file("./test.mp3")
```

## Links Úteis

- [GitHub Repository](https://github.com/jiaaro/pydub)
- [Documentação da API](https://github.com/jiaaro/pydub/blob/master/API.markdown)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)