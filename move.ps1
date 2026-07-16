$items = "about", "admin", "darshan", "deity-pooja", "history", "layout.tsx", "map", "page.module.css", "page.tsx", "surroundings", "testticketbooking", "testticketbooking1", "thulukka-nachiyar", "viswaroopa-seva"

New-Item -ItemType Directory -Force -Path "f:\Srirangam-project\src\app\[lang]"

foreach ($item in $items) {
    Move-Item -Path "f:\Srirangam-project\src\app\$item" -Destination "f:\Srirangam-project\src\app\[lang]"
}
