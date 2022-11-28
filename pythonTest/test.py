import curses
from PyPav2 import Pavlok


# device = Pavlok(mac="E1:12:63:5D:60:A0")
device2 = Pavlok(mac="F7:42:5B:0B:80:25")
# device3 = Pavlok(mac="E1:8D:53:FE:E6:3E")
choice = 4


print(device2.read("0x0013"))



while(choice != 0) :
  print("Vibrate - 1")
  print("Beep - 2")
  print("Shock - 3")
  print("Quit - 0")
  choice = int(input("Choice: "))


  if(choice == 1) :
    #device.vibrate(7)
    device2.vibrate(7)
    #device3.vibrate(7)
  elif(choice == 2) :
    #device.beep(7)
    device2.beep(7)
    #device3.beep(7)
  elif(choice == 3) :
    #device.shock(7)
    device2.shock(7)
    #device3.shock(7)


