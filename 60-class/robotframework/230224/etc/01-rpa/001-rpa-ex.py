from RPA.Browser import Browser

lib = Browser()

lib.open_browser("https://example.com")
lib.input_text("id:user-name", username)
lib.input_text("id:password", password)
