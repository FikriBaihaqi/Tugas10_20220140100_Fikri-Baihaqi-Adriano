import React, { useEffect } from 'react';
import './App.css';

const topRatedAnime = [
    { title: "Attack on Titan", rating: 9.0, image: "https://i.pinimg.com/564x/95/51/15/955115d13e66d446eb69a7d6c77e9ffa.jpg" },
    { title: "Fullmetal Alchemist: Brotherhood", rating: 9.1, image: "https://i.pinimg.com/564x/53/ae/14/53ae14fa3d64db95748e9a7e09151d8d.jpg" },
    { title: "Death Note", rating: 9.2, image: "https://i.pinimg.com/564x/6a/2a/f5/6a2af57e8dff829a6b5b69b5ac0d96d8.jpg" },
];

function App() {
    useEffect(() => {
        displayTopRatedAnime();
    }, []);

    function displayTopRatedAnime() {
        const carouselInner = document.querySelector('.carousel-inner');

        // Clear carouselInner before adding new items
        carouselInner.innerHTML = '';

        topRatedAnime.forEach((anime, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const imgElement = document.createElement('img');
            imgElement.src = anime.image;
            imgElement.alt = anime.title;
            imgElement.classList.add('d-block', 'mx-auto', 'mt-3', 'mb-2');
            carouselItem.appendChild(imgElement);

            const pElement = document.createElement('p');
            pElement.textContent = `${anime.title} - Rating: ${anime.rating}`;
            pElement.classList.add('fw-bold', 'mb-5');
            carouselItem.appendChild(pElement);

            carouselInner.appendChild(carouselItem);
        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">Samehadaku</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>

            <div className="container-fluid text-center mt-3" style={{ backgroundColor: '#1d519a' }}>
                <img src="https://www.seekpng.com/png/full/143-1430217_samehadaku-samehadaku-samehadaku-tv.png" alt="Samehadaku Logo" className="img-fluid samehadaku-logo" />
            </div>

            <div className="container py-4 container-py4-bg">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold title-text">Selamat Datang di Samehadaku</h1>
                        <h2 className="display-5 fw-bold title-text" style={{ fontSize: '29px' }}>Nonton Anime Favoritmu Disini</h2>
                        <p className="col-md-8 fs-4">
                            Samehadaku menyediakan ribuan judul anime yang bisa kamu nikmati dengan kualitas HD. Ayo bergabung dan saksikan serunya petualangan para karakter anime favoritmu!
                        </p>

                        <a href="#" className="btn btn-primary btn-lg" onClick={() => alert('Waktunya Menjelajah!')}>Jelajahi Anime</a>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <h2 className="text-center">Anime dengan Rating Tertinggi</h2>
                <div id="animeCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#animeCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#animeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <footer className="bg-dark text-light mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-center py-3">
                                <h3>Kontak Kami</h3>
                                <p>Email: apace@samehadaku.com</p>
                                <p>Phone: +62 87773238100</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center py-3">
                                <h3>Alamat</h3>
                                <p>Angkringan Isekai, Jl. A. Yani No.392, Krajan, Baledono, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54118</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="text-center py-3">
                                <p>Copyright &copy; 2077 Samehadaku</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
