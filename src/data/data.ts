import type { Profile, Experience, Project, AcademicProject, ToolItem } from '../types';

export const profile: Profile = {
  name: 'Arfan Indra Kurniawan',
  headline: 'AI Developer · Data Engineer · Data Analysis',
  location: 'Klaten, Jawa Tengah',
  phone: '+6285743900034',
  email: 'arfanindrakurniawan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arfan-indra-kurniawan/',
  linkedinLabel: 'Arfan Indra Kurniawan',
  summary: [
    'Saya adalah seorang AI Developer dan Data Engineer yang berfokus pada pengembangan solusi berbasis kecerdasan buatan, pipeline data, dan analisis data. Saat ini bekerja di Frontier Group sebagai Data Engineer, merancang dan mengelola pipeline ETL/ELT serta melakukan labelling data menggunakan LLM.',
    'Sebelumnya, selama satu tahun magang di CV Karya Hidup Sentosa, saya membangun sistem Computer Vision untuk inspeksi visual produk, mengembangkan pipeline data engineering dengan Apache Airflow dan PostgreSQL, serta membangun dashboard analitik dan aplikasi web.',
    'Saya menguasai berbagai teknologi mulai dari Python, SQL, TensorFlow, hingga Docker dan Apache Kafka. Saya selalu bersemangat untuk belajar dan mengembangkan solusi teknologi yang berdampak.'
  ],
  photo: '/assets/profile/image.png',
};

export const experiences: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'Frontier Group',
    period: 'Juli 2026 – Sekarang',
    logo: '/assets/logos/front.png',
    groups: [
      {
        points: [
          'Merancang dan membangun pipeline ETL/ELT untuk mengolah dan mengintegrasikan data dari berbagai sumber.',
          'Melakukan labelling data menggunakan Large Language Model (LLM) untuk mempercepat proses anotasi data.',
          'Mendesain skema data dan model data yang optimal untuk kebutuhan analitik dan machine learning.',
          'Monitoring dan optimasi performa pipeline data secara berkelanjutan.',
          'Berkolaborasi dengan tim data science dan engineering untuk memastikan kualitas dan ketersediaan data.',
        ],
      },
    ],
  },
  {
    role: 'Internship AI & Data Engineer',
    company: 'CV Karya Hidup Sentosa',
    period: 'Mei 2025 – Mei 2026',
    logo: '/assets/logos/khs.png',
    groups: [
      {
        points: [
          '**Face Recognition Attendance System** — Mengembangkan aplikasi absensi berbasis facial recognition menggunakan InsightFace untuk digunakan di berbagai departemen perusahaan.',
          '**Smart CCTV for PPE Detection** — Mengembangkan sistem deteksi kepatuhan penggunaan APD, seperti helm dan topi keselamatan, menggunakan RF-DETR.',
          '**Kaizen A3 Report OCR** — Mengembangkan sistem ekstraksi teks dari laporan A3 Kaizen menggunakan PaddleOCR.',
          '**API Development with FastAPI** — Mengimplementasikan FastAPI untuk integrasi dan pertukaran data antar sistem pada berbagai proyek AI.',
          '**AI Model Evaluation Dashboard** — Mengembangkan dashboard untuk memantau, mengevaluasi, dan membandingkan performa model AI.',
          '**Spare Parts Sales Dashboard** — Membuat dashboard analisis penjualan spare part menggunakan Metabase untuk mendukung analisis data bisnis.',
          '**Oracle to PostgreSQL ETL Pipeline** — Membangun pipeline ETL menggunakan Apache Airflow untuk mengotomatisasi migrasi data dari Oracle ke PostgreSQL sebagai sumber data Metabase.',
          '**Spare Parts Counting Application** — Mengembangkan aplikasi penghitung spare part untuk mendukung proses inventarisasi di gudang finished goods.',
          '**Infrared Face Recognition System** — Mengembangkan sistem absensi berbasis facial recognition menggunakan Raspberry Pi dan kamera inframerah untuk meningkatkan keandalan pengenalan wajah dan mengurangi kesalahan deteksi.',
          '**Work Habit Behavior Detection** — Mengembangkan sistem deteksi perilaku dan kebiasaan kerja menggunakan HRNet dan computer vision untuk mendukung pemantauan aktivitas kerja karyawan.',
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'simulasi-quantum-finance',
    title: 'Simulasi Quantum Finance',
    summary: 'Platform simulasi keuangan menggunakan komputasi kuantum untuk optimasi portofolio dan analisis risiko.',
    description: 'Platform simulasi keuangan menggunakan komputasi kuantum untuk optimasi portofolio dan analisis risiko. Proyek ini mengimplementasikan algoritma quantum computing seperti QAOA dan VQE untuk menyelesaikan masalah optimasi portofolio keuangan. Dibangun dengan Python, Qiskit, dan FastAPI sebagai backend, serta React untuk dashboard interaktif.',
    tech: ['Python', 'Qiskit', 'FastAPI', 'React', 'PostgreSQL'],
    category: ['AI/ML', 'Finance', 'Quantum Computing'],
    github: 'https://github.com/arfan379/simulasi-quantum-finance',
  },
  {
    slug: 'magma-iq',
    title: 'MAGMA-IQ',
    summary: 'Sistem intelligent quality control berbasis AI untuk monitoring dan analisis kualitas produk secara real-time.',
    description: 'MAGMA-IQ (Manufacturing Automated Grading & Monitoring Analytics - Intelligent Quality) adalah sistem intelligent quality control berbasis AI. Sistem ini menggunakan computer vision dan deep learning untuk mendeteksi cacat produk secara otomatis pada lini produksi. Dilengkapi dengan dashboard monitoring real-time dan sistem alerting.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'PostgreSQL', 'Docker'],
    category: ['AI/ML', 'Computer Vision', 'Manufacturing'],
    github: 'https://github.com/arfanindra',
  },
  {
    slug: 'siaga-api',
    title: 'SIAGA-API',
    summary: 'RESTful API untuk sistem informasi dan pengelolaan data bencana alam Indonesia secara real-time.',
    description: 'SIAGA-API (Sistem Informasi dan Analisis Geospasial API) adalah RESTful API untuk sistem informasi dan pengelolaan data bencana alam Indonesia secara real-time. Menyediakan endpoint untuk data gempa bumi, cuaca, dan peringatan dini. Dibangun dengan FastAPI dan menggunakan PostgreSQL dengan PostGIS untuk query geospasial.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Docker', 'Redis'],
    category: ['Backend', 'Geospatial', 'API'],
    github: 'https://github.com/arfanindra',
  },
  {
    slug: 'itma',
    title: 'ITMA',
    summary: 'Integrated Transportation Management & Analytics — platform analisis dan optimasi transportasi berbasis data.',
    description: 'ITMA (Integrated Transportation Management & Analytics) adalah platform analisis dan optimasi transportasi berbasis data. Menggunakan Apache Kafka untuk streaming data real-time, Apache Airflow untuk orchestrasi pipeline, dan dbt untuk transformasi data. Dashboard dibangun dengan React dan Grafana.',
    tech: ['Apache Kafka', 'Apache Airflow', 'dbt', 'PostgreSQL', 'React', 'Docker', 'Grafana'],
    category: ['Data Engineering', 'Analytics', 'Transportation'],
    github: 'https://github.com/arfanindra',
  },
];

export const academicProjects: AcademicProject[] = [
  {
    title: 'Clustering Genre Musik',
    description: 'Analisis dan pengelompokan genre musik menggunakan teknik machine learning clustering (K-Means, DBSCAN) berdasarkan fitur audio seperti tempo, energy, dan danceability dari dataset Spotify.',
    link: 'https://colab.research.google.com/',
    linkLabel: 'Buka di Google Colab',
  },
  {
    title: 'Analisis Tren Suhu Kota Yogyakarta (Mann-Kendall)',
    description: 'Analisis tren perubahan suhu di Kota Yogyakarta menggunakan uji statistik Mann-Kendall untuk mendeteksi tren monoton dalam data time series suhu selama 20 tahun terakhir.',
    link: 'https://colab.research.google.com/',
    linkLabel: 'Buka di Google Colab',
  },
  {
    title: 'Analisis Urbanisasi di Indonesia',
    description: 'Studi komprehensif tentang pola urbanisasi di Indonesia menggunakan data BPS, visualisasi geospasial, dan analisis statistik untuk memahami perpindahan penduduk dari desa ke kota.',
    link: 'https://www.linkedin.com/in/arfan-indra-kurniawan/',
    linkLabel: 'Lihat di LinkedIn',
  },
  {
    title: 'Real-Time E-Commerce Clickstream Analytics Pipeline',
    description: 'Pipeline data engineering untuk menganalisis clickstream e-commerce secara real-time menggunakan Apache Kafka, Apache Spark Streaming, dan PostgreSQL. Dilengkapi dashboard Grafana untuk monitoring.',
    link: 'https://github.com/arfanindra',
    linkLabel: 'Lihat di GitHub',
  },
];

export const tools: ToolItem[] = [
  {
    name: 'Python',
    logo: '/assets/tools/python.svg',
    description: 'Bahasa pemrograman utama untuk data engineering, backend API, computer vision, dan machine learning.',
  },
  {
    name: 'PostgreSQL',
    logo: '/assets/tools/postgresql.svg',
    description: 'Database relasional untuk query analitik kompleks, perancangan skema data, dan sistem produksi.',
  },
  {
    name: 'Apache Airflow',
    logo: '/assets/tools/airflow.svg',
    description: 'Platform orkestrasi workflow untuk mengotomatisasi, menjadwalkan, dan memantau pipeline ETL/ELT.',
  },
  {
    name: 'Apache Kafka',
    logo: '/assets/tools/kafka.svg',
    description: 'Distributed event streaming platform untuk ingestion dan pemrosesan data clickstream real-time.',
  },
  {
    name: 'FastAPI',
    logo: '/assets/tools/fastapi.svg',
    description: 'Modern backend web framework Python dengan performa tinggi untuk membangun RESTful API.',
  },
  {
    name: 'Docker',
    logo: '/assets/tools/docker.svg',
    description: 'Platform kontainerisasi untuk standardisasi deployment, isolasi dependency, dan skalabilitas aplikasi.',
  },
  {
    name: 'TensorFlow',
    logo: '/assets/tools/tensorflow.svg',
    description: 'Framework deep learning untuk melatih dan mengoptimasi model deteksi objek serta klasifikasi.',
  },
  {
    name: 'PyTorch',
    logo: '/assets/tools/pytorch.svg',
    description: 'Framework deep learning fleksibel untuk eksperimen model kecerdasan buatan dan neural network.',
  },
  {
    name: 'OpenCV',
    logo: '/assets/tools/opencv.svg',
    description: 'Library computer vision untuk pengolahan citra real-time, deteksi cacat, dan inspeksi visual.',
  },
  {
    name: 'Scikit-learn',
    logo: '/assets/tools/scikitlearn.svg',
    description: 'Tools machine learning untuk analisis prediktif, clustering data, regresi, dan preprocessing.',
  },
  {
    name: 'Metabase',
    logo: '/assets/tools/metabase.svg',
    description: 'Platform business intelligence untuk pembuatan dashboard analitik interaktif dan monitoring KPI.',
  },
  {
    name: 'Grafana',
    logo: '/assets/tools/grafana.svg',
    description: 'Visualisasi metrik dan observabilitas real-time untuk memantau performa sistem dan pipeline data.',
  },
  {
    name: 'dbt',
    logo: '/assets/tools/dbt.svg',
    description: 'Alat transformasi data modular untuk mengolah data langsung di dalam data warehouse.',
  },
  {
    name: 'React',
    logo: '/assets/tools/react.svg',
    description: 'Library frontend modern untuk membangun antarmuka pengguna interaktif dan dashboard aplikasi.',
  },
  {
    name: 'TypeScript',
    logo: '/assets/tools/typescript.svg',
    description: 'Superset JavaScript dengan static typing untuk pengembangan kode yang aman dan minim bug.',
  },
  {
    name: 'Pandas',
    logo: '/assets/tools/pandas.svg',
    description: 'Library manipulasi data tabel dan analisis struktur data komprehensif dalam ekosistem Python.',
  },
  {
    name: 'Redis',
    logo: '/assets/tools/redis.svg',
    description: 'In-memory data store berkecepatan tinggi untuk caching, session management, dan message broker.',
  },
  {
    name: 'MySQL',
    logo: '/assets/tools/mysql.svg',
    description: 'Relational database management system untuk penyimpanan dan manajemen transaksi data aplikasi.',
  },
  {
    name: 'Git & GitHub',
    logo: '/assets/tools/git.svg',
    description: 'Sistem version control untuk manajemen kode sumber, pelacakan perubahan, dan kolaborasi tim.',
  },
  {
    name: 'Linux',
    logo: '/assets/tools/linux.svg',
    description: 'Sistem operasi server standar industri untuk manajemen infrastruktur, deployment, dan automasi skrip.',
  },
];

