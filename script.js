let menuicon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuicon.onclick =()=>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
let themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    document.body.style.setProperty('--bg-color', 'var(--light-bg-color)');
    document.body.style.setProperty('--second-bg-color', 'var(--light-second-bg-color)');
    document.body.style.setProperty('--text-color', 'var(--light-text-color)');
    document.body.style.setProperty('--main-color', 'var(--light-main-color)');
  } else {
    document.body.style.setProperty('--bg-color', '#080808');
    document.body.style.setProperty('--second-bg-color', '#101010');
    document.body.style.setProperty('--text-color', 'white');
    document.body.style.setProperty('--main-color', '#ea580c');
  }
});

// Certificate Modal
function openCertificate(imgUrl) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certImg");
  const closeBtn = modal.querySelector(".close");
  const body = document.body;
  
  body.classList.add('modal-open');
  modal.style.display = "block";
  modalImg.src = imgUrl;
  
  // Event handler untuk tombol close
  closeBtn.onclick = function() {
    modal.style.display = "none";
    body.classList.remove('modal-open');
  }
  
  // Event handler untuk klik di luar modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.classList.remove('modal-open');
    }
  }
  
  // Check image orientation and adjust modal content
  modalImg.onload = function() {
    const imgRatio = this.naturalWidth / this.naturalHeight;
    
    if (imgRatio > 1) {
      this.style.width = '90%';
      this.style.height = 'auto';
    } else {
      this.style.height = '90vh';
      this.style.width = 'auto';
    }
  }
}

// Dark mode toggle
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// Particles config
document.addEventListener("DOMContentLoaded", function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: document.body.classList.contains('dark-mode') ? '#ffffff' : '#000000'
            },
            opacity: {
                value: 0.3
            },
            size: {
                value: 3
            },
            line_linked: {
                enable: true,
                color: document.body.classList.contains('dark-mode') ? '#ffffff' : '#000000',
                opacity: 0.2
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                }
            }
        }
    });
});

//emailjs

function sendEmail() {
  const button = document.getElementById('button');
  const contactForm = document.getElementById('contact-form');
  
  // Disable button
  button.disabled = true;
  button.textContent = 'Mengirim...';

  // Prepare template parameters
  const templateParams = {
      to_name: "Reza",
      from_name: document.getElementById('from_name').value,
      email_id: document.getElementById('email_id').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      reply_to: document.getElementById('email_id').value
  };

  // Send email using EmailJS
  emailjs.send('service_63nmo8z', 'template_tawt5dq', templateParams)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Pesan berhasil dikirim!');
          contactForm.reset();
      })
      .catch(function(error) {
          console.error('FAILED...', error);
          alert('Gagal mengirim pesan: ' + error.text);
      })
      .finally(function() {
          button.disabled = false;
          button.textContent = 'Kirim Pesan';
      });
}

// Error handler
window.onerror = function(msg, url, lineNo, columnNo, error) {
  console.error('Error:', {
    message: msg,
    url: url,
    line: lineNo,
    column: columnNo,
    error: error
  });
  return false;
};
// Kode ini menangani kesalahan yang terjadi di jendela. 
// Ketika ada kesalahan, informasi tentang kesalahan tersebut akan dicetak di konsol.
// Ini berguna untuk debugging dan membantu pengembang mengetahui sumber masalah.
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Terjadi kesalahan: ' + msg + '\nURL: ' + url + '\nBaris: ' + lineNo + '\nKolom: ' + columnNo + '\nObjek kesalahan: ' + JSON.stringify(error));
    return false;
};

function contactMe() {
  // Membuat URL mailto dengan alamat email yang ditentukan
  const email = 'rezawalker02@gmail.com';
  const subject = 'Permintaan Kontak';
  const body = 'Halo Reza,\n\nSaya tertarik untuk menghubungi Anda terkait : ';
  
  // Membuat URL mailto dengan parameter yang diencode
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Membuka aplikasi email default
  window.location.href = mailtoUrl;
}

// Certificate Toggle Function
function toggleCertificates() {
  const hiddenCerts = document.querySelectorAll('.hidden-cert');
  const seeMoreBtn = document.querySelector('.see-more-btn');
  
  hiddenCerts.forEach(cert => {
    if (!cert.classList.contains('show')) {
      cert.classList.add('show');
      seeMoreBtn.textContent = 'Show Less';
      seeMoreBtn.classList.add('active');
    } else {
      cert.classList.remove('show');
      seeMoreBtn.textContent = 'See More Certificates';
      seeMoreBtn.classList.remove('active');
    }
  });
  
  // Smooth scroll to show new certificates
  if (!hiddenCerts[0].classList.contains('show')) {
    window.scrollTo({
      top: document.querySelector('.certificate').offsetTop,
      behavior: 'smooth'
    });
  }
}

function openProject(imgUrl, title, description) {
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("projectImg");
  const projectTitle = document.getElementById("projectTitle");
  const projectDesc = document.getElementById("projectDesc");
  const body = document.body;
  
  body.classList.add('modal-open');
  modal.style.display = "block";
  modalImg.src = imgUrl;
  projectTitle.textContent = title;
  projectDesc.textContent = description;
  
  // Close modal when clicking on X
  const span = modal.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
    body.classList.remove('modal-open');
  }
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.classList.remove('modal-open');
    }
  }
}

function toggleAboutText() {
  const fullText = document.querySelector('.full-text');
  const readMoreBtn = document.querySelector('.read-more-btn');
  
  if (fullText.classList.contains('hidden')) {
    fullText.classList.remove('hidden');
    fullText.classList.add('show');
    readMoreBtn.textContent = 'Show Less';
    readMoreBtn.classList.add('active');
  } else {
    fullText.classList.remove('show');
    fullText.classList.add('hidden');
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.classList.remove('active');
  }
  
  // Sesuaikan warna teks berdasarkan mode tema
  if (document.body.classList.contains('light-mode')) {
    readMoreBtn.style.color = readMoreBtn.classList.contains('active') ? 'var(--main-color)' : 'black';
  } else {
    readMoreBtn.style.color = readMoreBtn.classList.contains('active') ? 'var(--main-color)' : 'black';
  }
}