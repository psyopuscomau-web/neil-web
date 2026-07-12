import Image from 'next/image'

const eras = [
  {
    name: 'Two Faces of Adam and Eve Era',
    files: [
      'IMG_0116.jpg','IMG_0117.jpg','IMG_0118.jpg','IMG_0122.jpg','IMG_0123.jpg','IMG_0124.jpg',
      'IMG_0854.JPG','IMG_0855.JPG','IMG_0856.JPG','IMG_0860.JPG',
      'IMG_1934.jpg','IMG_1935.jpg','IMG_1936.jpg','IMG_1938.jpg','IMG_1939.jpg','IMG_1940.jpg',
      'IMG_1941.jpg','IMG_1943.jpg','IMG_1944.jpg','IMG_1945.jpg','IMG_1946.jpg','IMG_1947.jpg',
      'IMG_1949.jpg','IMG_1950.jpg','IMG_1951.jpg','IMG_1953.jpg',
      'IMG_6274.JPG','IMG_6277.JPG','IMG_6279.JPG','IMG_6281.JPG','IMG_6287.JPG','IMG_6289.JPG',
      'IMG_6290.JPG','IMG_6293.JPG','IMG_6294.JPG','IMG_6295.JPG','IMG_6296.JPG','IMG_6297.JPG',
      'IMG_6299.JPG','IMG_6300.JPG','IMG_6302.JPG','IMG_6304.JPG','IMG_6305.JPG',
      'Mojo gig 04_12_12.jpg','Mojo gig - 2  04_12_12.jpg',
      'Neil 1.jpg','Neil Preston solo poetry.jpg','Neil Preston with Den Electro.jpg',
      'Neil Sitting 1.jpg','Neil Sitting 2.jpg','Neil Sitting with Hat 1.jpg','Neil Sitting with Hat 2.jpg',
      'Neil Strat.jpg','Neil Terry Live.jpg',
      'Screenshot 2026-07-11 172214.png',
      '311324_10150373443306891_73945426890_8675681_52953900_n - Copy.jpg',
      '377113_10150373445931891_73945426890_8675686_2024743825_n.jpg',
      '377705_10150373455311891_73945426890_8675696_1545262280_n.jpg',
      '386423_10150373333381891_73945426890_8675384_636666760_n.jpg',
      '390548_10150373447536891_73945426890_8675687_727580905_n.jpg',
      '392668_10150373455981891_73945426890_8675697_1790961783_n.jpg',
    ],
  },
  {
    name: 'Building Backyard Boats Era',
    files: [
      'Neil Preston promo with Les Paul.jpg','Neil Preston promo with Les Paul 2.jpg','Neil Preston promo with Les Paul 3.jpg',
      'Dobro Neil Preston.jpg','Doboro Face.jpg',
      'Gigs Oct Nov 2008.jpg','Gigs Oct Nov 2008 B&W.jpg',
      'IMG_0077.JPG','IMG_0078.JPG','IMG_0079.JPG',
      'IMG_0464.JPG','IMG_0474.JPG','IMG_0475.JPG','IMG_0477.JPG','IMG_0478.JPG','IMG_0489.JPG',
      'IMGP1409.JPG','IMGP1421.JPG','IMGP1427.JPG','IMGP1431.JPG',
      'P1000346.jpg','PB240239.JPG',
      '20080731_APL0069.jpg','20080731_APL0093.jpg','20080731_APL0302.jpg','20080731_APL0331.jpg','20080731_APL0331 solo.jpg',
      'Preston20080830_APL1520.jpg',
      'Screenshot 2026-07-07 184710.png','Screenshot 2026-07-09 162531.png','Screenshot 2026-07-09 162651.png',
      'Screenshot 2026-07-09 162722.png','Screenshot 2026-07-09 162750.png','Screenshot 2026-07-09 162808.png',
      'Screenshot 2026-07-09 162826.png','Screenshot 2026-07-09 162846.png',
      'Screenshot 2026-07-10 171300.png','Screenshot 2026-07-10 171349.png','Screenshot 2026-07-10 171526.png',
      'Screenshot 2026-07-10 171550.png','Screenshot 2026-07-10 171607.png',
    ],
  },
  {
    name: 'Daphne Apollo Era',
    files: [
      'd217726bm.JPG','d217726cm.JPG',
      'Beer Shot.JPG',
      "Neil's Foot.jpg",
      'Monday Psalter.JPG','Monday Psalter 2.JPG',
      'Neil Preston promoshot.JPG',
      'Screenshot 2026-07-07 184130.png',
    ],
  },
]

export default function PickPage() {
  return (
    <main style={{ background: '#111', minHeight: '100vh', padding: '90px 20px 40px', color: 'white' }}>
      <h1 style={{ fontFamily: 'sans-serif', fontSize: '1.2rem', marginBottom: '8px', color: '#aaa' }}>
        Image picker — browse and note the filenames you want for the Video page
      </h1>
      <p style={{ fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#666', marginBottom: '40px' }}>
        Click an image to open it full size. Tell Claude the 6 filenames you want.
      </p>
      {eras.map((era) => (
        <section key={era.name} style={{ marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#CC1100', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
            {era.name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '6px' }}>
            {era.files.map((file) => {
              const src = `/Neil Preston Images/${era.name}/${file}`
              return (
                <a key={file} href={src} target="_blank" rel="noreferrer"
                  style={{ display: 'block', position: 'relative', aspectRatio: '3/2', background: '#222', overflow: 'hidden' }}>
                  <Image src={src} alt={file} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="200px" />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'rgba(0,0,0,0.75)', padding: '4px 6px',
                    fontFamily: 'monospace', fontSize: '0.65rem', color: '#ccc',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {file}
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}
