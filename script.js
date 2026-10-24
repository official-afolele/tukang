// Inisialisasi Ikon Lucide
lucide.createIcons();

function switchTab(viewId) {
  // Sembunyikan semua tampilan
  document.querySelectorAll('.content-view').forEach(view => {
    view.classList.add('hidden');
  });

  // Matikan semua status aktif di sidebar
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
  });

  // Tampilkan tampilan yang dipilih
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.remove('hidden');

  // Aktifkan tombol nav terkait
  const targetBtn = document.getElementById(`nav-${viewId}`);
  if (targetBtn) targetBtn.classList.add('active');

  // Ganti Judul di Header
  const titles = {
    'dashboard': 'Dashboard Utama',
    'multiview': 'Split Screen Workspace (Dual View)',
    'shopee': 'Shopee Portal',
    'pinterest': 'Pinterest Media Studio',
    'google-ai': 'Google AI Studio Workspace'
  };
  document.getElementById('current-page-title').innerText = titles[viewId] || 'Workspace';
}
    const titles = {
    'dashboard': 'Dashboard Utama',
    'multiview': 'Split Screen Workspace',
    'shopee': 'Shopee Portal',
    'pinterest': 'Pinterest Media Studio',
    'google-ai': 'Google AI Studio',
    'scribd': 'Scribd Reader & PDF Exporter' // Tambahkan ini
    };

function loadFrame(side) {
  const url = document.getElementById(`url-${side}`).value;
  document.getElementById(`iframe-${side}`).src = url;
}

function setSplitPreset(leftUrl, rightUrl) {
  document.getElementById('url-left').value = leftUrl;
  document.getElementById('url-right').value = rightUrl;
  loadFrame('left');
  loadFrame('right');
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}
// Memuat URL Embed baru ke dalam Iframe Reader
function loadScribdEmbed() {
  const url = document.getElementById("scribd-url-input").value;
  if (url) {
    document.getElementById("scribd-frame").src = url;
  }
}

// Membuka jendela cetak untuk menyimpan semua halaman menjadi PDF utuh
function printScribdDocument() {
  const iframe = document.getElementById("scribd-frame");
  if (iframe) {
    try {
      // Fokus ke iframe lalu buka dialog Print to PDF browser
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (e) {
      // Jika terhalang kebijakan cross-origin, buka di tab baru yang bersih untuk dicetak
      const embedUrl = document.getElementById("scribd-url-input").value;
      const win = window.open(embedUrl, "_blank");
      win.focus();
      win.onload = function () {
        win.print();
      };
    }
  }
}
