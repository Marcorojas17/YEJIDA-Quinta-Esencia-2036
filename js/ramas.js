const RAMAS = {
  A: { titulo:'Criptografía', heb:'הצפנה', icono:'🔐', color:'#ff6b6b', desc:'Base técnica del sistema. Sin criptografía no hay verdad verificable.',
    sub: {
      A1:{n:'Funciones Hash',items:['SHA-3 (Keccak)','BLAKE3','SHA-256','Argon2id','SPHINCS+','Lamport']},
      A2:{n:'Firmas Digitales',items:['Ed25519','ECDSA SECP256k1','Schnorr','BLS','Ring signatures']},
      A3:{n:'Conocimiento Cero',items:['zk-SNARKs','zk-STARKs','Bulletproofs','PLONK/Halo2','Integridad sin revelar']},
      A4:{n:'Multi-Parte',items:['Shamir','Threshold','Garbled circuits','VSS','DKG']},
      A5:{n:'Cifrado Avanzado',items:['AES-256-GCM','ChaCha20-Poly1305','Homomorphic','Functional','Attribute-based']},
      A6:{n:'Post-Cuántica',items:['Kyber','Dilithium','Falcon','SPHINCS+','NTRU']}
    }
  },
  B: { titulo:'Anclaje Temporal', heb:'עיגון זמן', icono:'⏱️', color:'#4fd1c5', desc:'Que el tiempo no pueda mentir.',
    sub: {
      B1:{n:'Blockchain',items:['Bitcoin','Ethereum','Solana','Cardano','Arweave']},
      B2:{n:'Merkle',items:['Merkle trees','Patricia Trie','Verkle trees','Sparse Merkle']},
      B3:{n:'Timestamping',items:['RFC 3161','OpenTimestamps','Guardtime','FreeTSA']},
      B4:{n:'Almacenamiento',items:['IPFS','Arweave','Filecoin','Storj','Sia']},
      B5:{n:'Ledgers',items:['Hyperledger Fabric','Corda','Quorum','Hashgraph']}
    }
  },
  C: { titulo:'Identidad', heb:'זהות', icono:'🪪', color:'#f7e08a', desc:'Quién eres y cómo lo pruebas.',
    sub: {
      C1:{n:'Biometría',items:['Huella','Rostro 3D','Iris','Voz','ADN','ECG']},
      C2:{n:'Hardware',items:['TPM 2.0','HSM','Secure Enclave','YubiKey','Ledger/Trezor']},
      C3:{n:'Protocolos',items:['WebAuthn/FIDO2','Passkeys','OAuth 2.0+PKCE','OpenID Connect','DID']},
      C4:{n:'Multi-Factor',items:['MFA','2FA TOTP','Push','Hardware keys']},
      C5:{n:'Descentralizada',items:['Sovrin','uPort','Microsoft ION','Verifiable Credentials','SSI']}
    }
  },
  D: { titulo:'Trazabilidad', heb:'עקיבות', icono:'📜', color:'#a29bfe', desc:'Nada puede borrarse ni alterarse.',
    sub: {
      D1:{n:'Logs Append-Only',items:['Certificate Transparency','Trillian','Sigstore','Rekor','Immudb']},
      D2:{n:'Cadena de Custodia',items:['Firma por acción','Timestamp','Hash encadenado','Testigos','Notarización']},
      D3:{n:'Versionado Firmado',items:['Git GPG','Sigstore cosign','SLSA','Reproducible builds','SBOM']},
      D4:{n:'Auditoría',items:['Logs inmutables','Tiempo real','Alertas','Forense']},
      D5:{n:'Anti-Tampering',items:['Honeypots','Canary tokens','Watermarking','Steganografía','Self-destruct']}
    }
  },
  E: { titulo:'Verificación', heb:'אימות', icono:'✅', color:'#4ade80', desc:'Cualquiera puede verificarlo sin permiso.',
    sub: {
      E1:{n:'Código Abierto',items:['Repo público','Licencia libre','Auditoría','Fork','Bounties']},
      E2:{n:'Build Reproducible',items:['Determinismo','Mismo hash','Bazel, Nix','Docker fijo']},
      E3:{n:'Multi-Parte',items:['Nodos','Consenso','Testigos','Redundancia']},
      E4:{n:'Pruebas',items:['Test suites','Fuzzing','Property-based','Formal']},
      E5:{n:'Transparencia',items:['Código','Logs','Firmas','Métricas','Incidentes']}
    }
  },
  F: { titulo:'Resistencia Física', heb:'עמידות', icono:'🛡️', color:'#e67e22', desc:'Protección contra manipulación física.',
    sub: {
      F1:{n:'PUF',items:['SRAM PUF','Óptica','Magnética','ADN','No clonables']},
      F2:{n:'Sellos',items:['Holográficos','Microtexto','Termosensibles','UV','Auto-destructivos']},
      F3:{n:'Hardware Seguro',items:['HSM FIPS 140-3','TPM attestation','SGX, SEV','TrustZone','Anti-side-channel']},
      F4:{n:'Distribución',items:['5+ países','Replicación','Bóvedas','Multi-parte']},
      F5:{n:'Físico-Químico',items:['Isótopos','ADN sintético','Nanopartículas','Diamantes','Metales']}
    }
  },
  G: { titulo:'Defensa', heb:'הגנה', icono:'⚔️', color:'#ff6b9d', desc:'Preparación ante todo tipo de ataque.',
    sub: {
      G1:{n:'Cuánticos',items:['PQC','Lattice','Hash-based','Code-based','Multivariate']},
      G2:{n:'Canal Lateral',items:['Constant-time','Blindaje EM','Aislamiento','Masking','Ruido']},
      G3:{n:'Ingeniería Social',items:['Educación','Out-of-band','Códigos','Frases','Zero-trust']},
      G4:{n:'Internas',items:['Rotación','M-of-N','Separation','Audit','Watermarking']},
      G5:{n:'IA Generativa',items:['Deepfakes','C2PA','Provenance','Watermarking','Firmas']}
    }
  },
  H: { titulo:'Filosofía', heb:'פילוסופיה', icono:'🧠', color:'#9b59b6', desc:'Los fundamentos conceptuales.',
    sub: {
      H1:{n:'Popper',items:['Falsabilidad','Matemáticas','Criptografía']},
      H2:{n:'Verdad Matemática',items:['2+2=4','Gödel','Pruebas formales','Verificación']},
      H3:{n:'Verdad Cabalística',items:['Emet אמת','YHVH','Torá código','Yejidá']},
      H4:{n:'Consenso Social',items:['Habermas','Consenso','Quórum','Reputación']},
      H5:{n:'Metafísica',items:['Parménides','Ser inmutable','Akasha','Libro de la Vida']}
    }
  },
  I: { titulo:'Aplicaciones YEJIDÁ', heb:'יישומים', icono:'✡️', color:'#d4af37', desc:'Integración con la tradición cabalística.',
    sub: {
      I1:{n:'Certificados',items:['72 Nombres','Shabat','Guematria','Sigilo','Nombre hebreo']},
      I2:{n:'Sellos',items:['72 combinaciones','Atbash','Notarikon','Temurá','Nombre divino']},
      I3:{n:'Testigos',items:['72 ángeles','12 tribus','7 cielos','4 mundos','Sefirot']},
      I4:{n:'Verificación',items:['Suma checksum','Reducciones','Pares','Yijud']},
      I5:{n:'Rituales',items:['Shemá','Modeh Aní','Hitbodedut','Mikvé','Teshuvá']}
    }
  },
  J: { titulo:'Gobernanza', heb:'ממשל', icono:'⚖️', color:'#6c5ce7', desc:'Cómo se toman las decisiones.',
    sub: {
      J1:{n:'Descentralización',items:['DAO','Multisig','Cuadrática','Líquida','Conviction']},
      J2:{n:'Reputación',items:['Web of Trust','EigenTrust','PageRank','Staking','Slashing']},
      J3:{n:'Disputas',items:['Kleros','Aragon','Jurado','Apelaciones','Precedentes']},
      J4:{n:'Conflictos',items:['Mediación','Arbitraje','Fork','Hard fork']},
      J5:{n:'Incentivos',items:['PoS','PoW','PoSpace','PoHistory','Bonding']}
    }
  },
  K: { titulo:'Verificación Humana', heb:'אימות אנושי', icono:'👥', color:'#00b894', desc:'Los humanos como parte del sistema.',
    sub: {
      K1:{n:'Testigos',items:['Notarios','Escribanos','Boda','Contratos','Beit Din']},
      K2:{n:'Documentos',items:['Ketubá','Guet','Tefilín','Mezuzá','Torá']},
      K3:{n:'Tradición',items:['Semijá','Linaje','Oral','Pirkei Avot']},
      K4:{n:'Rituales',items:['Juramento','Sangre','Apuesta','Maldición']},
      K5:{n:'Espiritual',items:['Ruaj HaKodesh','Urim veTumim','Bat Kol','Sueños','Milagros']}
    }
  },
  L: { titulo:'Arquitectura', heb:'ארכיטקטורה', icono:'🏗️', color:'#0984e3', desc:'Cómo se ensambla todo.',
    sub: {
      L1:{n:'Capas',items:['Física','Firmware','Cripto','Tiempo','App','Usuario','Metafísica']},
      L2:{n:'Flujo',items:['Credencial','Firma','Timestamp','Merkle','IPFS','Gematria','72 Nombres']},
      L3:{n:'Componentes',items:['Ledger','Bitcoin','IPFS','ZKP','MPC','Blockchain']},
      L4:{n:'Resiliencia',items:['Sin punto único','Redundancia','Recuperación','Continuidad']},
      L5:{n:'Auditoría',items:['Logs','Bounties','Anual','Red/Blue','Transparencia']}
    }
  },
  M: { titulo:'Economía', heb:'כלכלה', icono:'💰', color:'#fdcb6e', desc:'Los incentivos económicos.',
    sub: {
      M1:{n:'Tokens',items:['ERC-721','ERC-1155','Soulbound','Reputación','Gobernanza']},
      M2:{n:'Incentivos',items:['Verificar','Staking','Slashing','Auditoría','Bounties']},
      M3:{n:'Mercados',items:['Marketplace','Subastas','Licencias','Regalías','Creadores']},
      M4:{n:'Tesorería',items:['Multisig','DAO','Presupuesto','Auditoría','Reservas']},
      M5:{n:'Modelos',items:['Suscripción','Pago por uso','Freemium','White-label','API B2B','Donaciones']}
    }
  },
  N: { titulo:'Legal', heb:'משפט', icono:'⚖️', color:'#dfe6e9', desc:'El marco legal del sistema.',
    sub: {
      N1:{n:'Marcos',items:['GDPR','CCPA','LGPD','LFPDPPP','NOM-151','eIDAS']},
      N2:{n:'Propiedad',items:['Copyright','Morales','CC','Safe Creative','Blockchain','Marca']},
      N3:{n:'Contratos',items:['Smart','Legibles','Términos','Privacidad','SLA']},
      N4:{n:'Cumplimiento',items:['KYC/AML','Sanctions','Fiscal','Contable','Seguros']},
      N5:{n:'Disputas',items:['Arbitraje','Mediación','Tribunales','Apelaciones','Precedentes']}
    }
  },
  O: { titulo:'Interfaz', heb:'ממשק', icono:'🎨', color:'#fd79a8', desc:'Cómo el usuario experimenta todo.',
    sub: {
      O1:{n:'Diseño',items:['WebGL','Geometría','Claro/oscuro','WCAG','Responsive']},
      O2:{n:'Interacción',items:['Onboarding','Tutoriales','Feedback','Micro-animaciones','Binaural']},
      O3:{n:'Personalización',items:['Temas','Idiomas','Husos','Calendarios','Preferencias']},
      O4:{n:'Accesibilidad',items:['Lectores','Contraste','Teclado','Subtítulos','Signos']},
      O5:{n:'Dispositivos',items:['Web','Móvil','Tablet','VR/AR','Wearables']}
    }
  },
  P: { titulo:'Educación', heb:'חינוך', icono:'📚', color:'#00cec9', desc:'Cómo se comparte el conocimiento.',
    sub: {
      P1:{n:'Contenido',items:['Cursos','Tutoriales','Webinars','Podcast','Newsletter']},
      P2:{n:'Certificaciones',items:['Intérprete','Maestro','Guardián','Auditor','Formador']},
      P3:{n:'Divulgación',items:['Blog','YouTube','TikTok','Twitter','LinkedIn']},
      P4:{n:'Investigación',items:['Whitepapers','Papers','Colaboraciones','Datos abiertos','Repos']},
      P5:{n:'Comunidad',items:['Foros','Grupos','Mentorías','Tutorías','Evaluaciones']}
    }
  },
  Q: { titulo:'Comunidad', heb:'קהילה', icono:'🌐', color:'#e17055', desc:'Cómo se conecta la gente.',
    sub: {
      Q1:{n:'Plataformas',items:['Foro','Discord','Telegram','WhatsApp','Reddit']},
      Q2:{n:'Gobernanza',items:['Moderadores','Conducta','Votaciones','Propuestas','Transparencia']},
      Q3:{n:'Eventos',items:['Webinars','Talleres','Retiros','Congresos','Festivales']},
      Q4:{n:'Embajadores',items:['País','Idioma','Tradición','Nicho','Referidos']},
      Q5:{n:'Moderación',items:['IA+humanos','Reportes','Sanciones','Apelaciones','Rehabilitación']}
    }
  },
  R: { titulo:'Métricas', heb:'מדדים', icono:'📊', color:'#74b9ff', desc:'Qué se mide y por qué.',
    sub: {
      R1:{n:'Negocio',items:['MRR','CAC','LTV','Churn','Conversión']},
      R2:{n:'Producto',items:['DAU/MAU','Retención','Engagement','NPS','CSAT']},
      R3:{n:'Seguridad',items:['Ataques','Detección','Respuesta','Vulnerabilidades','Incidentes']},
      R4:{n:'Comunidad',items:['Miembros','Contribuciones','Certificaciones','Eventos']},
      R5:{n:'Transparencia',items:['Dashboard','Informes','Auditorías','Datos abiertos']}
    }
  },
  S: { titulo:'Escalabilidad', heb:'הרחבה', icono:'📈', color:'#55efc4', desc:'Cómo crece sin romperse.',
    sub: {
      S1:{n:'Infraestructura',items:['Kubernetes','Serverless','Edge','CDN','Auto-scaling']},
      S2:{n:'Blockchain',items:['Layer 2','Sidechains','Sharding','State channels','Plasma']},
      S3:{n:'Almacenamiento',items:['IPFS','Arweave','Filecoin','Storj','S3']},
      S4:{n:'Computación',items:['GPU','TPU','Edge AI','Federated','Confidential']},
      S5:{n:'Optimización',items:['Caché','Compresión','Lazy','Splitting','Prefetch']}
    }
  },
  T: { titulo:'Interoperabilidad', heb:'תקשורת', icono:'🔗', color:'#ff7675', desc:'Cómo se conecta con otros sistemas.',
    sub: {
      T1:{n:'Estándares',items:['W3C VC','DID','C2PA','OpenTimestamps','RFC 3161']},
      T2:{n:'Protocolos',items:['IPFS','Libp2p','GraphQL','gRPC','REST']},
      T3:{n:'Puentes',items:['Cross-chain','Atomic swaps','Wrapped','Oracles','Interledger']},
      T4:{n:'APIs',items:['Públicas','Privadas','GraphQL','Webhooks','SDKs']},
      T5:{n:'Datos Abiertos',items:['JSON-LD','Schema.org','OpenAPI','RDF','CSV/Parquet']}
    }
  },
  U: { titulo:'Sostenibilidad', heb:'קיימות', icono:'🌱', color:'#00b894', desc:'Cómo perdura en el tiempo.',
    sub: {
      U1:{n:'Ambiental',items:['Renovable','Huella','Compensación','Servidores verdes','Eficiencia']},
      U2:{n:'Social',items:['Becas','Acceso','Inclusión','Diversidad','Impacto']},
      U3:{n:'Gobernanza',items:['Transparencia','Rendición','Participación','Ética','Conducta']},
      U4:{n:'Economía',items:['Comercio justo','Precios','Regalías','Reparto','Inversión']},
      U5:{n:'Reportes',items:['Anual','ESG','Auditoría','Stakeholders','Mejora']}
    }
  },
  V: { titulo:'IA y Automatización', heb:'בינה מלאכותית', icono:'🤖', color:'#a29bfe', desc:'La inteligencia artificial como aliada.',
    sub: {
      V1:{n:'Modelos',items:['LLMs','Difusión','Voz','Video','Multimodal']},
      V2:{n:'Aplicaciones',items:['Chatbot','Informes','Interpretación','Traducción','Moderación']},
      V3:{n:'Ética',items:['Transparencia','Sesgos','Privacidad','Derechos','Límites']},
      V4:{n:'Automatización',items:['Workflows','RPA','Orquestación','Alertas','Auto-scaling']},
      V5:{n:'Seguridad',items:['Deepfakes','Watermarking','Provenance','Robustez','Adversarial']}
    }
  },
  W: { titulo:'Biología y ADN', heb:'ביולוגיה', icono:'🧬', color:'#ffeaa7', desc:'La vida como ancla única.',
    sub: {
      W1:{n:'ADN',items:['Secuenciación','Sintético','Marcas','Códigos','Almacenamiento']},
      W2:{n:'Biometría',items:['Iris','Retina','Voz','ECG','Huella','Firma']},
      W3:{n:'Comportamiento',items:['Tipeo','Mouse','Gait','Sueño','Circadiano']},
      W4:{n:'Salud',items:['Wearables','Médicos','Consentimiento','Privacidad','Interop']},
      W5:{n:'Bioética',items:['Informado','No discriminación','Derechos','Regulación','Transparencia']}
    }
  },
  X: { titulo:'Física y Cuántica', heb:'פיזיקה', icono:'⚛️', color:'#81ecec', desc:'Las leyes fundamentales como aliadas.',
    sub: {
      X1:{n:'Cuántica',items:['QKD','Entrelazamiento','Superposición','Decoherencia','PQC']},
      X2:{n:'Relatividad',items:['Tiempo','GPS','Sincronización','Dilatación']},
      X3:{n:'Termodinámica',items:['Entropía','Irreversibilidad','Flecha','Conservación','Límites']},
      X4:{n:'Materiales',items:['PUF','Nanopartículas','Diamantes','Metales','Isótopos']},
      X5:{n:'Cosmología',items:['Memoria cósmica','Akasha','Registro','Orden','Sincronicidad']}
    }
  },
  Y: { titulo:'Arte y Simbolismo', heb:'אמנות', icono:'🎨', color:'#fab1a0', desc:'La belleza como vehículo de verdad.',
    sub: {
      Y1:{n:'Arte Sagrado',items:['Geometría','Mandalas','Iconos','Caligrafía','Alquimia']},
      Y2:{n:'Generación IA',items:['Estilos','Paletas','Semillas','Variaciones','Animación']},
      Y3:{n:'Música',items:['Binaural','Mantras','Frecuencias','432/528 Hz','IA']},
      Y4:{n:'Narrativa',items:['Mitos','Parábolas','Cuentos','Guiones','Storytelling']},
      Y5:{n:'Diseño',items:['Branding','Tipografía','Color','Layout','Motion']}
    }
  },
  Z: { titulo:'Gamificación', heb:'משחוק', icono:'🎮', color:'#ffeaa7', desc:'Cómo mantener el interés humano.',
    sub: {
      Z1:{n:'Mecánicas',items:['Puntos','Niveles','Insignias','Rachas','Rankings','Recompensas']},
      Z2:{n:'Psicología',items:['Motivación','Hábitos','Flow','Sesgos','Neurociencia']},
      Z3:{n:'Retención',items:['Notificaciones','Email','Push','SMS','WhatsApp']},
      Z4:{n:'Comunidad',items:['Equipos','Clanes','Competencias','Colaboraciones','Eventos']},
      Z5:{n:'Misiones',items:['Diarias','Semanales','Mensuales','Anuales','Épicas']}
    }
  }
};
