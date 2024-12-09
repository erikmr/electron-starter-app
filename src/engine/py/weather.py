import sys
import os
from datetime import datetime

city = sys.argv[1]


def get_weather(place):
    # print({
    #     'sucess': True,
    #     'message': 'Weather data retrieved successfully',
    #     'data':[],
    #     'total': 0
    # })
    # # Obtener la ruta de la ubicación actual
    # ubicacion_actual = os.getcwd()

    # # Listar todos los archivos en la ubicación actual
    # archivos = [archivo for archivo in os.listdir(ubicacion_actual) if os.path.isfile(os.path.join(ubicacion_actual, archivo))]

    # print("Archivos en la ubicación actual:")
    # for archivo in archivos:
    #   print(archivo)

    # # Nombre del archivo
    # nombre_archivo = "prueba.txt"

    # # Verificar si el archivo ya existe
    # if os.path.exists(nombre_archivo):
    #     os.remove(nombre_archivo)
    #     print(f"El archivo '{nombre_archivo}' existía y ha sido eliminado.")

    # # Obtener la fecha y hora actuales
    # fecha_hora_actual = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # # Crear el archivo con el contenido deseado
    # with open(nombre_archivo, "w") as archivo:
    #     archivo.write("¡Hola, mundo!\n")
    #     archivo.write(f"Fecha y hora: {fecha_hora_actual}\n")

    # print(f"El archivo '{nombre_archivo}' ha sido creado con fecha y hora.")




    hResult = {
        'sucess': True,
        'message': 'OK',
        'data':[{
            'city': place,
            'temperature': 30,
            'humidity': 80
        }],
        'total': 1
    }


    return hResult

print(get_weather(city) )
# print("Weather Engine is running")
sys.stdout.flush()
