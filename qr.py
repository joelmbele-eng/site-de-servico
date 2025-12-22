import qrcode

url = "https://joelmbele-eng.github.io/site-de-servico/#"
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("C:\\Users\\PCK AGENCY 2\\Desktop\\site\\site-de-servico-main\\qr.png")
