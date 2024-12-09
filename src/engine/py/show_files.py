import sys
import os

city = sys.argv[1]


def show_flies():

    # Obtener la ruta de la ubicación actual
    ubicacion_actual = os.getcwd()

    archivos = [archivo for archivo in os.listdir(ubicacion_actual) if os.path.isfile(os.path.join(ubicacion_actual, archivo))]

    # Definir el JSON hResult
    hResult = {
        'success': True,
        'message': 'OK',
        'data': [{
            'path': ubicacion_actual,
            'files': archivos # Integrar la lista de archivos aquí
        }],
        'total': 1
    }

    return hResult

print(show_flies())
# print("Weather Engine is running")
sys.stdout.flush()
