// Creo la mappa impostando il centro di visualizzazione e il livello di zoom. La
// mappa sarà associata al div di id map
var map = L.map('map').setView([46.0010, 10.3291], 15);


//TILES
/*
TILES (letteralmente mattonelle), sono delle immagini che rappresetano porzioni di una mappa.
Di una stessa zona del pianeta, sono disponibili più tile, a differenti livelli di zoom. Le
tile sono ospitate su dei server e possono essere richieste indicando:

- Server (naturalmente)
- Sub-server (s)
- Livello di zoom (z)
- Tile x-esima da sinistra a destra
- tile y-esima dall'alto verso il basso

Il parametro s, indica un sottoinsieme di server, in modo che le richieste alle tiles possano essere distribuite
su gruppi di server diversi, così da meglio bilanciare il carico dei server stessi.

Un server di tiles è buono se fornisce tiles aggiornate. Seguono due schemi per il download di tiles
da server che ospitano tiles di opencyclemap

// SERVER DISPONIBILI PER IL DOWNLOAD DELLE TILES
// 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
// 'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png'


Esempio
La tile che rappresenta l'intero pianeta, ha il minimo livello di zoom:
z = 0
Essendo unica anche x e y sono uguali a 0
x, y = 0

La tile può essere recuperata dai sub-server a, b o c

'http://a.tile.thunderforest.com/cycle/0/0/0.png'
'http://b.tile.thunderforest.com/cycle/0/0/0.png'
'http://c.tile.thunderforest.com/cycle/0/0/0.png'

al livello di zoom 0 è quindi disponibile un'unica tile

al livello di zoom 1, sono disponibili 4 tile

al livello di zoom 2, sono disponibili 16 tile

al livello di zoom 3, sono disponibili 64 tile

al livello di zoom 4, sono disponibili 256 tile e così via

I server che ho indicando, ospitano le tile di openstreetmap, che sono generate da un progetto open.
In internet, sono disponibili server che offrono tile proprietarie, a pagamento o gratuite. https://www.mapbox.com, mette a disposizione tile proprietarie.
*/


// Imposto il server da cui verranno scaricate le tile
L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {
    maxZoom: 18

}).addTo(map);

