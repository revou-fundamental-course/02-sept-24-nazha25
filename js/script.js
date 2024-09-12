document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menghitung luas segitiga
    document.getElementById('hitungan-luas-segitiga').addEventListener('click', () => {
        let alas = parseFloat(document.getElementById('alas-segitiga').value);
        let tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);
        let resultElement = document.getElementById('result-luas-segitiga');

        if (isNaN(alas) || isNaN(tinggi)) {
            resultElement.textContent = 'Form Masih Kosong atau Tidak Valid';
        } else {
            let luas = 0.5 * alas * tinggi;
            resultElement.textContent = 'Hasil Perhitungan: ' + luas;
        }
    });

    // Fungsi untuk menghitung keliling segitiga
    document.getElementById('hitungan-keliling-segitiga').addEventListener('click', () => {
        let sisi1 = parseFloat(document.getElementById('sisi1-segitiga').value);
        let sisi2 = parseFloat(document.getElementById('sisi2-segitiga').value);
        let sisi3 = parseFloat(document.getElementById('sisi3-segitiga').value);
        let resultElement = document.getElementById('result-keliling-segitiga');

        if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
            resultElement.textContent = 'Form Masih Kosong atau Tidak Valid';
        } else {
            let keliling = sisi1 + sisi2 + sisi3;
            resultElement.textContent = 'Hasil Perhitungan: ' + keliling;
        }
    });

    // Fungsi untuk menghitung luas jajargenjang
    document.getElementById('hitungan-luas-jajargenjang').addEventListener('click', () => {
        let alas = parseFloat(document.getElementById('alas-jajargenjang').value);
        let tinggi = parseFloat(document.getElementById('tinggi-jajargenjang').value);
        let resultElement = document.getElementById('result-luas-jajargenjang');

        if (isNaN(alas) || isNaN(tinggi)) {
            resultElement.textContent = 'Form Masih Kosong atau Tidak Valid';
        } else {
            let luas = alas * tinggi;
            resultElement.textContent = 'Hasil Perhitungan: ' + luas;
        }
    });

    // Fungsi untuk menghitung keliling jajargenjang
    document.getElementById('hitungan-keliling-jajargenjang').addEventListener('click', () => {
        let sisi1 = parseFloat(document.getElementById('sisi1-jajargenjang').value);
        let sisi2 = parseFloat(document.getElementById('sisi2-jajargenjang').value);
        let resultElement = document.getElementById('result-keliling-jajargenjang');

        if (isNaN(sisi1) || isNaN(sisi2)) {
            resultElement.textContent = 'Form Masih Kosong atau Tidak Valid';
        } else {
            let keliling = 2 * (sisi1 + sisi2);
            resultElement.textContent = 'Hasil Perhitungan: ' + keliling;
        }
    });
});
