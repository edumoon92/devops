***Settings***
Library    RPA.PDF

***Tasks***
Fill Form
    Open PDF    ./sample.pdf
    Set Field Value    phone_nr   080123123
    Set Field Value    address    robot street 14
    Save Field Values  output_path=output.pdf