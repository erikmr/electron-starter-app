import sys
import os
import sqlite3

city = sys.argv[1]


def executeForCRUDLocal(message):
  dbName = 'example.db'
  ubicacion_actual = os.getcwd()
  folderName = 'db'
  full_dbName = os.path.join( ubicacion_actual,folderName,dbName)
  # print(full_dbName)

  # Si no existe la carpeta db, la creamos
  if not os.path.exists(os.path.join( ubicacion_actual,folderName)):
    os.mkdir( os.path.join( ubicacion_actual,folderName))

  # Si no existe la base de datos, la creamos
  if not os.path.exists(full_dbName):
    con = sqlite3.connect(full_dbName)

    cur = con.cursor()

    # Create table
    cur.execute('''CREATE TABLE stocks
                  (date text, trans text, symbol text, qty real, price real)''')

    # Insert a row of data
    cur.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

    # Save (commit) the changes
    con.commit()

  # Conectarse a la base de datos
  con = sqlite3.connect(full_dbName)

  # Crear un cursor
  cur = con.cursor()

  # Larger example that inserts many records at a time
  purchases = [('2006-03-28', 'BUY', 'IBM', 1000, 45.00),
              ('2006-04-05', 'BUY', 'MSFT', 1000, 72.00),
              ('2006-04-06', 'SELL', 'IBM', 500, 53.00),
              ]
  cur.executemany('INSERT INTO stocks VALUES (?,?,?,?,?)', purchases)

  result = {
      'success': True,
      'message': 'Data retrieved successfully',
      'data': []
  }

  for row in cur.execute('SELECT * FROM stocks ORDER BY price'):
      # Convertir la fila en un diccionario si conoces los nombres de las columnas

      result['data'].append({
          'column1': row[0],
          'column2': row[1],
          'column3': row[2],
          'column4': row[3],
          # Agregar más columnas según corresponda
      })

  # # We can also close the connection if we are done with it.
  # # Just be sure any changes have been committed or they will be lost.
  # con.close()
  # return result
  return result

print(executeForCRUDLocal(city) )
# print("Weather Engine is running")
sys.stdout.flush()
