import phonenumbers
from phonenumbers import geocoder, carrier
from opencage.geocoder import OpenCageGeocode
import folium

# Masukkan kunci API OpenCage Anda di sini
key = "your_opencage_api_key"

number = input("Tolong berikan nomor kamu: ")
new_number = phonenumbers.parse(number)

# Mendapatkan lokasi dari nomor telepon
location = geocoder.description_for_number(new_number, "id")
print("Lokasi:", location)

# Mendapatkan penyedia layanan dari nomor telepon
service_name = carrier.name_for_number(new_number, "id")
print("Penyedia Layanan:", service_name)

# Memulai geocoder untuk mencari latitude dan longitude
geocoder_service = OpenCageGeocode(key)
query = str(location)
result = geocoder_service.geocode(query)

if result:
    lat = result[0]['geometry']['lat']
    lng = result[0]['geometry']['lng']
    print("Latitude dan Longitude:", lat, lng)

    # Membuat peta dengan koordinat yang diperoleh
    my_map = folium.Map(location=[lat, lng], zoom_start=9)
    folium.Marker([lat, lng], popup=location).add_to(my_map)

    # Menyimpan peta ke file HTML
    my_map.save("location.html")
    print("Location tracking completed. Map saved as 'location.html'.")
else:
    print("Lokasi tidak ditemukan. Periksa kembali nomor telepon atau lokasi.")

print("Terima kasih!")
