/* ═══════════════════════════════════════════════════════════
   RAMAS DEL SISTEMA INFALSIFICABLE · A-Z
   ═══════════════════════════════════════════════════════════ */

const RAMAS = {
  A: {
    titulo: 'Criptografía',
    heb: 'הצפנה',
    icono: '🔐',
    color: '#ff6b6b',
    desc: 'Base técnica del sistema. Sin criptografía no hay verdad verificable.',
    sub: {
      A1: { n: 'Funciones Hash', items: ['SHA-3 (Keccak-256, 512)', 'BLAKE3 (ultrarrápido, paralelo)', 'SHA-256 (estándar)', 'Argon2id (resistente a GPU/ASIC)', 'Post-cuánticos (SPHINCS+, Dilithium)', 'Hash-based (Lamport, Merkle)'] },
      A2: { n: 'Firmas Digitales', items: ['Ed25519', 'ECDSA (SECP256k1)', 'Schnorr (agregables)', 'BLS (agregación)', 'Ring signatures'] },
      A3: { n: 'Pruebas de Conocimiento Cero', items: ['zk-SNARKs', 'zk-STARKs', 'Bulletproofs', 'PLONK / Halo2', 'Integridad sin revelar datos'] },
      A4: { n: 'Computación Multi-Parte', items: ['Shamir Secret Sharing', 'Threshold signatures', 'Garbled circuits', 'Verifiable Secret Sharing', 'Distributed key generation'] },
      A5: { n: 'Cifrado Avanzado', items: ['AES-256-GCM', 'ChaCha20-Poly1305', 'Homomorphic encryption', 'Functional encryption', 'Attribute-based encryption'] },
      A6: { n: 'Post-Cuántica', items: ['Kyber (KEM lattice)', 'Dilithium (firmas)', 'Falcon (compactas)', 'SPHINCS+ (hash-based)', 'NTRU / NTRU Prime'] }
    }
  },
  B: {
    titulo: 'Anclaje Temporal',
    heb: 'עיגון זמן',
    icono: '⏱️',
    color: '#4fd1c5',
    desc: 'Que el tiempo no pueda mentir.',
    sub: {
      B1: { n: 'Blockchain', items: ['Bitcoin', 'Ethereum', 'Solana', 'Cardano', 'Arweave'] },
      B2: { n: 'Estructuras Merkle', items: ['Merkle trees', 'Merkle Patricia Trie', 'Verkle trees', 'Sparse Merkle Trees'] },
      B3: { n: 'Timestamping', items: ['RFC 3161', 'OpenTimestamps', 'Guardtime', 'FreeTSA'] },
      B4: { n: 'Almacenamiento Permanente', items: ['IPFS', 'Arweave', 'Filecoin', 'Storj', 'Sia'] },
      B5: { n: 'Ledgers Distribuidos', items: ['Hyperledger Fabric', 'Corda', 'Quorum', 'Hashgraph'] }
    }
  },
  C: {
    titulo: 'Identidad y Autenticación',
    heb: 'זהות',
    icono: '🪪',
    color: '#f7e08a',
    desc: 'Quién eres y cómo lo pruebas.',
    sub: {
      C1: { n: 'Biometría', items: ['Huella dactilar', 'Reconocimiento facial 3D', 'Iris', 'Voz con anti-spoofing', 'ADN', 'Ritmo cardíaco (ECG)'] },
      C2: { n: 'Hardware', items: ['TPM 2.0', 'HSM', 'Secure Enclave', 'YubiKey', 'Ledger/Trezor'] },
      C3: { n: 'Protocolos', items: ['WebAuthn / FIDO2', 'Passkeys', 'OAuth 2.0 + PKCE', 'OpenID Connect', 'DID'] },
      C4: { n: 'Multi-Factor', items: ['MFA', '2FA TOTP', 'Push notifications', 'Hardware keys'] },
      C5: { n: 'Identidad Descentralizada', items: ['Sovrin', 'uPort', 'Microsoft ION', 'Verifiable Credentials', 'SSI'] }
    }
  },
  D: {
    titulo: 'Trazabilidad e Inmutabilidad',
    heb: 'עקיבות',
    icono: '📜',
    color: '#a29bfe',
    desc: 'Nada puede borrarse ni alterarse.',
    sub: {
      D1: { n: 'Logs Append-Only', items: ['Certificate Transparency', 'Trillian', 'Sigstore', 'Rekor', 'Immudb'] },
      D2: { n: 'Cadena de Custodia', items: ['Firma por acción', 'Timestamp por evento', 'Hash encadenado', 'Testigos independientes', 'Notarización cruzada'] },
      D3: { n: 'Versionado Firmado', items: ['Git con commits GPG', 'Sigstore cosign', 'SLSA', 'Reproducible builds', 'SBOM'] },
      D4: { n: 'Auditoría Continua', items: ['Logs cifrados inmutables', 'Monitoreo en tiempo real', 'Alertas automáticas', 'Forense post-incidente'] },
      D5: { n: 'Anti-Tampering', items: ['Honeypots', 'Canary tokens', 'Watermarking', 'Steganografía', 'Self-destruct'] }
    }
  },
  E: {
    titulo: 'Verificación Independiente',
    heb: 'אימות',
    icono: '✅',
    color: '#4ade80',
    desc: 'Cualquiera puede verificarlo sin permiso.',
    sub: {
      E1: { n: 'Código Abierto', items: ['Repositorio público', 'Licencia libre', 'Auditoría comunitaria', 'Fork y revisión por pares', 'Bounties'] },
      E2: { n: 'Build Reproducible', items: ['Determinismo bit a bit', 'Mismo hash desde distintas máquinas', 'Bazel, Nix', 'Docker con hashes fijos'] },
      E3: { n: 'Verificación Multi-Parte', items: ['Nodos independientes', 'Consenso por mayoría', 'Testigos externos', 'Redundancia geográfica'] },
      E4: { n: 'Pruebas Públicas', items: ['Test suites abiertos', 'Fuzzing continuo', 'Property-based testing', 'Formal verification'] },
      E5: { n: 'Transparencia Radical', items: ['Código público', 'Logs públicos', 'Firmas públicas', 'Métricas públicas', 'Incidentes públicos'] }
    }
  },
  F: {
    titulo: 'Resistencia Física',
    heb: 'עמידות פיזית',
    icono: '🛡️',
    color: '#e67e22',
    desc: 'Protección contra manipulación física.',
    sub: {
      F1: { n: 'PUF', items: ['SRAM PUF', 'Óptica (scattering)', 'Magnética', 'ADN', 'Imposibles de clonar'] },
      F2: { n: 'Sellos Anti-Manipulación', items: ['Holográficos', 'Microtexto', 'Termosensibles', 'UV', 'Auto-destructivos'] },
      F3: { n: 'Hardware Seguro', items: ['HSM FIPS 140-3', 'TPM 2.0 attestation', 'SGX, SEV', 'TrustZone ARM', 'Anti-side-channel'] },
      F4: { n: 'Distribución Geográfica', items: ['Servidores en 5+ países', 'Replicación continental', 'Backups en bóvedas', 'Custodia multi-parte'] },
      F5: { n: 'Anclaje Físico-Químico', items: ['Isótopos radiactivos', 'ADN sintético', 'Nanopartículas', 'Diamantes', 'Metales únicos'] }
    }
  },
  G: {
    titulo: 'Defensa contra Ataques',
    heb: 'הגנה',
    icono: '⚔️',
    color: '#ff6b9d',
    desc: 'Preparación ante todo tipo de ataque.',
    sub: {
      G1: { n: 'Ataques Cuánticos', items: ['PQC', 'Lattice-based', 'Hash-based', 'Code-based', 'Multivariate'] },
      G2: { n: 'Canal Lateral', items: ['Constant-time', 'Blindaje EM', 'Aislamiento', 'Masking', 'Ruido artificial'] },
      G3: { n: 'Ingeniería Social', items: ['Educación', 'Verificación out-of-band', 'Códigos de seguridad', 'Frases de recuperación', 'Zero-trust'] },
      G4: { n: 'Amenazas Internas', items: ['Rotación de claves', 'M-of-N approvals', 'Separation of duties', 'Audit trails', 'Watermarking'] },
      G5: { n: 'IA Generativa', items: ['Detección de deepfakes', 'C2PA', 'Provenance chains', 'Watermarking invisible', 'Firmas de contenido'] }
    }
  },
  H: {
    titulo: 'Filosofía de la Infalsificabilidad',
    heb: 'פילוסופיה',
    icono: '🧠',
    color: '#9b59b6',
    desc: 'Los fundamentos conceptuales.',
    sub: {
      H1: { n: 'Popper', items: ['Falsabilidad científica', 'Matemáticas infalsificables', 'Criptografía por diseño'] },
      H2: { n: 'Verdad Matemática', items: ['2+2=4', 'Teoremas de Gödel', 'Pruebas formales', 'Verificación mecánica'] },
      H3: { n: 'Verdad Cabalística', items: ['Emet (אמת)', 'El Nombre YHVH', 'Torá como código', 'Yejidá como chispa'] },
      H4: { n: 'Consenso Social', items: ['Habermas', 'Verdad por consenso', 'Quórum de testigos', 'Reputación'] },
      H5: { n: 'Metafísica', items: ['Parménides', 'Ser inmutable', 'Memoria cósmica', 'Akasha', 'Libro de la Vida'] }
    }
  },
  I: {
    titulo: 'Aplicaciones Kabalísticas YEJIDÁ',
    heb: 'יישומים קבליים',
    icono: '✡️',
    color: '#d4af37',
    desc: 'La integración con la tradición cabalística.',
    sub: {
      I1: { n: 'Certificados YEJIDÁ', items: ['Firma con 72 Nombres', 'Timestamp en Shabat', 'Guematria como checksum', 'Sigilo como firma', 'Nombre hebreo como ID'] },
      I2: { n: 'Sellos Sagrados', items: ['72 combinaciones', 'Atbash reversible', 'Notarikon', 'Temurá', 'Nombre divino como firma'] },
      I3: { n: 'Testigos Celestiales', items: ['72 ángeles', '12 tribus como nodos', '7 cielos como capas', '4 mundos jerárquicos', 'Sefirot como validadores'] },
      I4: { n: 'Verificación por Guematria', items: ['Suma como checksum', 'Reducciones', 'Pares de palabras', 'Yijud como unificación'] },
      I5: { n: 'Rituales de Autenticación', items: ['Shemá', 'Modeh Aní', 'Hitbodedut', 'Mikvé', 'Teshuvá'] }
    }
  },
  J: {
    titulo: 'Gobernanza y Consenso',
    heb: 'ממשל',
    icono: '⚖️',
    color: '#6c5ce7',
    desc: 'Cómo se toman las decisiones.',
    sub: {
      J1: { n: 'Descentralización', items: ['DAO', 'Multisig M-de-N', 'Votación cuadrática', 'Delegación líquida', 'Conviction voting'] },
      J2: { n: 'Reputación', items: ['Web of Trust', 'EigenTrust', 'PageRank', 'Staking', 'Slashing'] },
      J3: { n: 'Disputas', items: ['Kleros', 'Aragon Court', 'Jurado por sorteo', 'Apelaciones', 'Precedentes'] },
      J4: { n: 'Conflictos', items: ['Mediación algorítmica', 'Arbitraje', 'Consenso por fork', 'Hard fork'] },
      J5: { n: 'Incentivos', items: ['Proof of Stake', 'Proof of Work', 'Proof of Space', 'Proof of History', 'Bonding curves'] }
    }
  },
  K: {
    titulo: 'Verificación Humana',
    heb: 'אימות אנושי',
    icono: '👥',
    color: '#00b894',
    desc: 'Los humanos como parte del sistema.',
    sub: {
      K1: { n: 'Testigos Humanos', items: ['Notarios', 'Escribanos', 'Testigos de boda', 'Testigos de contrato', 'Beit Din'] },
      K2: { n: 'Documentos Físicos', items: ['Ketubá', 'Guet', 'Tefilín escritos a mano', 'Mezuzá', 'Sifrei Torá'] },
      K3: { n: 'Cadenas de Tradición', items: ['Semijá', 'Linaje de maestros', 'Transmisión oral', 'Pirkei Avot'] },
      K4: { n: 'Rituales', items: ['Juramento', 'Firma con sangre', 'Apuesta de vida', 'Maldición por falsedad'] },
      K5: { n: 'Verificación Espiritual', items: ['Ruaj HaKodesh', 'Urim veTumim', 'Bat Kol', 'Sueños proféticos', 'Milagros'] }
    }
  },
  L: {
    titulo: 'Arquitectura del Sistema',
    heb: 'ארכיטקטורה',
    icono: '🏗️',
    color: '#0984e3',
    desc: 'Cómo se ensambla todo.',
    sub: {
      L1: { n: 'Capas', items: ['Física', 'Firmware', 'Criptográfica', 'Anclaje temporal', 'Aplicación', 'Usuario', 'Metafísica'] },
      L2: { n: 'Flujo de Verificación', items: ['Credencial', 'Firma Ed25519', 'Timestamp Bitcoin', 'Merkle proof', 'IPFS hash', 'Gematria checksum', '72 Nombres'] },
      L3: { n: 'Componentes', items: ['Ledger local', 'Notarización Bitcoin', 'IPFS + Arweave', 'ZKP', 'MPC', 'Blockchain propio'] },
      L4: { n: 'Resiliencia', items: ['Sin punto único', 'Redundancia continental', 'Recuperación', 'Continuidad', 'Anti-ataques'] },
      L5: { n: 'Auditoría', items: ['Logs públicos', 'Bug bounty', 'Auditoría anual', 'Red/Blue team', 'Transparencia'] }
    }
  },
  M: {
    titulo: 'Economía y Tokenomía',
    heb: 'כלכלה',
    icono: '💰',
    color: '#fdcb6e',
    desc: 'Los incentivos económicos.',
    sub: {
      M1: { n: 'Tokens', items: ['ERC-721 por certificado', 'ERC-1155 por lote', 'Soulbound tokens', 'Token de reputación', 'Token de gobernanza'] },
      M2: { n: 'Incentivos', items: ['Recompensas por verificar', 'Staking como testigo', 'Slashing por falsedad', 'Recompensas por auditoría', 'Bounties'] },
      M3: { n: 'Mercados', items: ['Marketplace de certificados', 'Subastas de arte sagrado', 'Licencias', 'Regalías automáticas', 'Economía de creadores'] },
      M4: { n: 'Tesorería', items: ['Multisig M-de-N', 'Gestión DAO', 'Presupuesto transparente', 'Auditoría on-chain', 'Reservas'] },
      M5: { n: 'Modelos', items: ['Suscripciones', 'Pago por uso', 'Freemium', 'White-label', 'API B2B', 'Donaciones'] }
    }
  },
  N: {
    titulo: 'Legalidad y Cumplimiento',
    heb: 'משפט',
    icono: '⚖️',
    color: '#dfe6e9',
    desc: 'El marco legal del sistema.',
    sub: {
      N1: { n: 'Marcos Normativos', items: ['GDPR', 'CCPA', 'LGPD', 'LFPDPPP', 'NOM-151-SCFI-2016', 'eIDAS'] },
      N2: { n: 'Propiedad Intelectual', items: ['Copyright', 'Derechos morales', 'Licencias CC', 'Safe Creative', 'Blockchain como prueba', 'Registro de marca'] },
      N3: { n: 'Contratos', items: ['Smart contracts', 'Contratos legibles', 'Términos y condiciones', 'Política de privacidad', 'SLA'] },
      N4: { n: 'Cumplimiento', items: ['KYC / AML', 'Sanctions screening', 'Reporte fiscal', 'Auditoría contable', 'Seguros'] },
      N5: { n: 'Disputas', items: ['Arbitraje', 'Mediación', 'Tribunales descentralizados', 'Apelaciones', 'Precedentes'] }
    }
  },
  O: {
    titulo: 'Interfaz y Experiencia',
    heb: 'ממשק',
    icono: '🎨',
    color: '#fd79a8',
    desc: 'Cómo el usuario experimenta todo.',
    sub: {
      O1: { n: 'Diseño', items: ['Fondo WebGL', 'Geometría sagrada animada', 'Modo claro/oscuro', 'WCAG 2.2 AA', 'Responsive'] },
      O2: { n: 'Interacción', items: ['Onboarding', 'Tutoriales', 'Feedback inmediato', 'Micro-animaciones', 'Sonido binaural'] },
      O3: { n: 'Personalización', items: ['Temas por tradición', 'Idiomas', 'Husos horarios', 'Calendarios', 'Preferencias'] },
      O4: { n: 'Accesibilidad', items: ['Lectores de pantalla', 'Contraste alto', 'Navegación por teclado', 'Subtítulos', 'Lengua de signos'] },
      O5: { n: 'Dispositivos', items: ['Web', 'Móvil', 'Tablet', 'VR/AR', 'Wearables'] }
    }
  },
  P: {
    titulo: 'Educación y Divulgación',
    heb: 'חינוך',
    icono: '📚',
    color: '#00cec9',
    desc: 'Cómo se comparte el conocimiento.',
    sub: {
      P1: { n: 'Contenido', items: ['Cursos', 'Tutoriales', 'Webinars', 'Podcast', 'Newsletter'] },
      P2: { n: 'Certificaciones', items: ['Intérprete', 'Maestro', 'Guardián', 'Auditor', 'Formador'] },
      P3: { n: 'Divulgación', items: ['Blog SEO', 'YouTube', 'TikTok/Reels', 'Twitter/X', 'LinkedIn'] },
      P4: { n: 'Investigación', items: ['Whitepapers', 'Papers académicos', 'Colaboraciones', 'Datos abiertos', 'Repositorios'] },
      P5: { n: 'Comunidad Educativa', items: ['Foros', 'Grupos de estudio', 'Mentorías', 'Tutorías', 'Evaluaciones'] }
    }
  },
  Q: {
    titulo: 'Comunidad y Redes',
    heb: 'קהילה',
    icono: '🌐',
    color: '#e17055',
    desc: 'Cómo se conecta la gente.',
    sub: {
      Q1: { n: 'Plataformas', items: ['Foro propio', 'Discord', 'Telegram', 'WhatsApp', 'Reddit'] },
      Q2: { n: 'Gobernanza Comunitaria', items: ['Moderadores', 'Código de conducta', 'Votaciones', 'Propuestas', 'Transparencia'] },
      Q3: { n: 'Eventos', items: ['Webinars', 'Talleres', 'Retiros', 'Congresos', 'Festivales'] },
      Q4: { n: 'Embajadores', items: ['Por país', 'Por idioma', 'Por tradición', 'Por nicho', 'Programa de referidos'] },
      Q5: { n: 'Moderación', items: ['IA + humanos', 'Reportes', 'Sanciones', 'Apelaciones', 'Rehabilitación'] }
    }
  },
  R: {
    titulo: 'Métricas y Analítica',
    heb: 'מדדים',
    icono: '📊',
    color: '#74b9ff',
    desc: 'Qué se mide y por qué.',
    sub: {
      R1: { n: 'Negocio', items: ['MRR', 'CAC', 'LTV', 'Churn', 'Conversión'] },
      R2: { n: 'Producto', items: ['DAU/MAU', 'Retención', 'Engagement', 'NPS', 'CSAT'] },
      R3: { n: 'Seguridad', items: ['Intentos de ataque', 'Tiempo de detección', 'Tiempo de respuesta', 'Vulnerabilidades', 'Incidentes'] },
      R4: { n: 'Comunidad', items: ['Miembros activos', 'Contribuciones', 'Certificaciones', 'Eventos'] },
      R5: { n: 'Transparencia', items: ['Dashboard público', 'Informes anuales', 'Auditorías', 'Datos abiertos'] }
    }
  },
  S: {
    titulo: 'Escalabilidad y Rendimiento',
    heb: 'הרחבה',
    icono: '📈',
    color: '#55efc4',
    desc: 'Cómo crece sin romperse.',
    sub: {
      S1: { n: 'Infraestructura', items: ['Kubernetes', 'Serverless', 'Edge computing', 'CDN global', 'Auto-scaling'] },
      S2: { n: 'Blockchain', items: ['Layer 2 (Rollups)', 'Sidechains', 'Sharding', 'State channels', 'Plasma'] },
      S3: { n: 'Almacenamiento', items: ['IPFS', 'Arweave', 'Filecoin', 'Storj', 'S3 compatible'] },
      S4: { n: 'Computación', items: ['GPU clusters', 'TPU', 'Edge AI', 'Federated learning', 'Confidential computing'] },
      S5: { n: 'Optimización', items: ['Caché', 'Compresión', 'Lazy loading', 'Code splitting', 'Prefetching'] }
    }
  },
  T: {
    titulo: 'Interoperabilidad y Estándares',
    heb: 'תקשורת',
    icono: '🔗',
    color: '#ff7675',
    desc: 'Cómo se conecta con otros sistemas.',
    sub: {
      T1: { n: 'Estándares', items: ['W3C Verifiable Credentials', 'DID', 'C2PA', 'OpenTimestamps', 'RFC 3161'] },
      T2: { n: 'Protocolos', items: ['IPFS', 'Libp2p', 'GraphQL', 'gRPC', 'REST'] },
      T3: { n: 'Puentes', items: ['Cross-chain bridges', 'Atomic swaps', 'Wrapped tokens', 'Oracles (Chainlink)', 'Interledger'] },
      T4: { n: 'APIs', items: ['Públicas', 'Privadas', 'GraphQL', 'Webhooks', 'SDKs'] },
      T5: { n: 'Datos Abiertos', items: ['JSON-LD', 'Schema.org', 'OpenAPI', 'RDF', 'CSV/Parquet'] }
    }
  },
  U: {
    titulo: 'Sostenibilidad e Impacto',
    heb: 'קיימות',
    icono: '🌱',
    color: '#00b894',
    desc: 'Cómo perdura en el tiempo.',
    sub: {
      U1: { n: 'Ambiental', items: ['Energía renovable', 'Huella de carbono', 'Compensación', 'Servidores verdes', 'Eficiencia'] },
      U2: { n: 'Social', items: ['Becas', 'Acceso gratuito', 'Inclusión', 'Diversidad', 'Impacto comunitario'] },
      U3: { n: 'Gobernanza', items: ['Transparencia', 'Rendición de cuentas', 'Participación', 'Ética', 'Código de conducta'] },
      U4: { n: 'Economía', items: ['Comercio justo', 'Precios accesibles', 'Regalías justas', 'Reparto equitativo', 'Inversión de impacto'] },
      U5: { n: 'Reportes', items: ['Informe anual', 'Métricas ESG', 'Auditoría externa', 'Stakeholders', 'Mejora continua'] }
    }
  },
  V: {
    titulo: 'IA y Automatización',
    heb: 'בינה מלאכותית',
    icono: '🤖',
    color: '#a29bfe',
    desc: 'La inteligencia artificial como aliada.',
    sub: {
      V1: { n: 'Modelos', items: ['LLMs (GPT, Claude, Gemini)', 'Difusión', 'Voz (TTS, STT)', 'Video (Sora)', 'Multimodal'] },
      V2: { n: 'Aplicaciones', items: ['Chatbot', 'Generación de informes', 'Interpretación', 'Traducción', 'Moderación'] },
      V3: { n: 'Ética IA', items: ['Transparencia', 'Sesgos', 'Privacidad', 'Derechos de autor', 'Límites'] },
      V4: { n: 'Automatización', items: ['Workflows', 'RPA', 'Orquestación', 'Alertas', 'Auto-scaling'] },
      V5: { n: 'Seguridad IA', items: ['Detección deepfakes', 'Watermarking', 'Provenance', 'Robustez', 'Adversarial testing'] }
    }
  },
  W: {
    titulo: 'Biología y ADN',
    heb: 'ביולוגיה',
    icono: '🧬',
    color: '#ffeaa7',
    desc: 'La vida como ancla única.',
    sub: {
      W1: { n: 'ADN como Ancla', items: ['Secuenciación única', 'ADN sintético', 'Marcas biológicas', 'Códigos en ADN', 'Almacenamiento'] },
      W2: { n: 'Biometría Avanzada', items: ['Iris', 'Retina', 'Voz', 'ECG', 'Huella', 'Firma dinámica'] },
      W3: { n: 'Comportamiento', items: ['Tipeo', 'Mouse', 'Gait', 'Sueño', 'Ritmo circadiano'] },
      W4: { n: 'Salud', items: ['Wearables', 'Datos médicos', 'Consentimiento', 'Privacidad', 'Interoperabilidad'] },
      W5: { n: 'Bioética', items: ['Consentimiento informado', 'No discriminación', 'Derechos humanos', 'Regulación', 'Transparencia'] }
    }
  },
  X: {
    titulo: 'Física y Cuántica',
    heb: 'פיזיקה',
    icono: '⚛️',
    color: '#81ecec',
    desc: 'Las leyes fundamentales como aliadas.',
    sub: {
      X1: { n: 'Cuántica', items: ['QKD', 'Entrelazamiento', 'Superposición', 'Decoherencia', 'Post-cuántica'] },
      X2: { n: 'Relatividad', items: ['Tiempo relativo', 'GPS', 'Sincronización', 'Dilatación temporal'] },
      X3: { n: 'Termodinámica', items: ['Entropía', 'Irreversibilidad', 'Flecha del tiempo', 'Conservación', 'Límites físicos'] },
      X4: { n: 'Materiales', items: ['PUF', 'Nanopartículas', 'Diamantes', 'Metales', 'Isótopos'] },
      X5: { n: 'Cosmología', items: ['Memoria cósmica', 'Akasha', 'Registro universal', 'Orden implícito', 'Sincronicidad'] }
    }
  },
  Y: {
    titulo: 'Arte y Simbolismo',
    heb: 'אמנות',
    icono: '🎨',
    color: '#fab1a0',
    desc: 'La belleza como vehículo de verdad.',
    sub: {
      Y1: { n: 'Arte Sagrado', items: ['Geometría sagrada', 'Mandalas', 'Iconos', 'Caligrafía hebrea', 'Alquimia'] },
      Y2: { n: 'Generación IA', items: ['Estilos', 'Paletas', 'Semillas', 'Variaciones', 'Animación'] },
      Y3: { n: 'Música', items: ['Sonidos binaurales', 'Mantras', 'Frecuencias sagradas', '432 Hz / 528 Hz', 'Composición IA'] },
      Y4: { n: 'Narrativa', items: ['Mitos', 'Parábolas', 'Cuentos', 'Guiones', 'Storytelling'] },
      Y5: { n: 'Diseño', items: ['Branding', 'Tipografía', 'Color', 'Layout', 'Motion'] }
    }
  },
  Z: {
    titulo: 'Gamificación y Psicología',
    heb: 'משחוק',
    icono: '🎮',
    color: '#ffeaa7',
    desc: 'Cómo mantener el interés humano.',
    sub: {
      Z1: { n: 'Mecánicas', items: ['Puntos', 'Niveles', 'Insignias', 'Rachas', 'Rankings', 'Recompensas'] },
      Z2: { n: 'Psicología', items: ['Motivación', 'Hábitos', 'Flow', 'Sesgos', 'Neurociencia'] },
      Z3: { n: 'Retención', items: ['Notificaciones', 'Email', 'Push', 'SMS', 'WhatsApp'] },
      Z4: { n: 'Comunidad', items: ['Equipos', 'Clanes', 'Competencias', 'Colaboraciones', 'Eventos'] },
      Z5: { n: 'Misiones', items: ['Diarias', 'Semanales', 'Mensuales', 'Anuales', 'Épicas'] }
    }
  }
};
