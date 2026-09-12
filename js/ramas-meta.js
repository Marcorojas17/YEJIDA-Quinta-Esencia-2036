const RAMAS_META = {
  AA: { titulo:'Riesgos y Amenazas', heb:'סיכונים', icono:'⚠️', color:'#e74c3c', desc:'Qué puede fallar y cómo responder.',
    sub: {
      AA1:{n:'Adversos',items:['51%','Colusión','Censura','Partición','Guerra']},
      AA2:{n:'Contingencia',items:['Failover','Rollback','Fork','Offline','Recuperación']},
      AA3:{n:'Análisis',items:['Matriz','STRIDE','DREAD','MITRE','Red team']},
      AA4:{n:'Seguros',items:['Nexus','InsurAce','Smart contracts','Custodia']},
      AA5:{n:'Lecciones',items:['Post-mortem','Root cause','Mejora','Conocimiento']}
    }
  },
  AB: { titulo:'Casos de Uso', heb:'שימושים', icono:'🎯', color:'#3498db', desc:'Aplicaciones concretas del sistema.',
    sub: {
      AB1:{n:'Certificados',items:['Diplomas','Títulos','Certificaciones','Credenciales']},
      AB2:{n:'Arte',items:['Obras','Ediciones','Regalías','Procedencia']},
      AB3:{n:'Música',items:['Derechos','Regalías','Colaboraciones','Sellos']},
      AB4:{n:'Contratos',items:['Legales','Inmobiliarios','Laborales','Servicios']},
      AB5:{n:'Votaciones',items:['Elecciones','Gobernanza','Referéndums','Presupuestos']}
    }
  },
  AC: { titulo:'SYMBIOSIS', heb:'סימביוזה', icono:'🔗', color:'#9b59b6', desc:'Conexión con el Acta Fundacional.',
    sub: {
      AC1:{n:'Acta',items:['ID 2607086319439','Inmutable','Firmado','Bitcoin']},
      AC2:{n:'Identidad',items:['DID','Credenciales','Perfil','Reputación']},
      AC3:{n:'Gobernanza',items:['Votaciones','Tesorería','Propuestas']},
      AC4:{n:'Interop',items:['APIs','Puentes','Mensajería']},
      AC5:{n:'Visión',items:['Manifiesto','Roadmap','Metas']}
    }
  },
  AD: { titulo:'Certificaciones', heb:'הסמכות', icono:'🏅', color:'#f39c12', desc:'Certificaciones formales.',
    sub: {
      AD1:{n:'ISO',items:['27001','27701','27017','27018','42001','9001']},
      AD2:{n:'NOM',items:['NOM-151','LFPDPPP','NOM-035','NOM-024']},
      AD3:{n:'Internacional',items:['SOC 2','FedRAMP','PCI DSS','HIPAA']},
      AD4:{n:'Auditorías',items:['Internas','Externas','Pentest','Code review','Bounty']},
      AD5:{n:'Proceso',items:['Preparación','Gap','Implementación','Auditoría','Certificado']}
    }
  },
  AE: { titulo:'Roadmap 10 Años', heb:'מפת דרכים', icono:'🗺️', color:'#1abc9c', desc:'Visión a largo plazo.',
    sub: {
      AE1:{n:'Año 1-2',items:['MVP','Usuarios','Certificados','Comunidad']},
      AE2:{n:'Año 3-4',items:['Token','DAO','Integraciones','Internacional']},
      AE3:{n:'Año 5-6',items:['ISO','Alianzas','Global']},
      AE4:{n:'Año 7-8',items:['Sostenibilidad','Fundación','Legado']},
      AE5:{n:'Año 9-10',items:['Consolidación','Sucesión','Trascendencia']}
    }
  },
  AF: { titulo:'Fundación y Legado', heb:'מורשת', icono:'🏛️', color:'#8e44ad', desc:'Qué queda cuando ya no estés.',
    sub: {
      AF1:{n:'Legal',items:['Fundación','Consejo','Estatutos','Misión']},
      AF2:{n:'Gobernanza',items:['Multisig','Sucesión','Consejo','Inmutable']},
      AF3:{n:'Tesorería',items:['Endowment','Rendimientos','Distribución','Auditoría']},
      AF4:{n:'Intelectual',items:['Biblioteca','Cursos','Investigación','Archivo']},
      AF5:{n:'Espiritual',items:['Tradición','Iniciados','Maestros','Enseñanza']}
    }
  },
  AG: { titulo:'Testigos Descentralizados', heb:'עדים', icono:'👁️', color:'#e67e22', desc:'Oráculos humanos y máquinas.',
    sub: {
      AG1:{n:'Humanos',items:['Notarios','Árbitros','Testigos','Validadores']},
      AG2:{n:'Máquina',items:['Chainlink','Band','API3','Pyth']},
      AG3:{n:'Híbridos',items:['Humano+IA','Consenso','Cruzada']},
      AG4:{n:'Reputación',items:['Historial','Staking','Slashing','Desafíos']},
      AG5:{n:'Incentivos',items:['Recompensas','Comisiones','Descuentos','Acceso']}
    }
  },
  AH: { titulo:'Pruebas de Humanidad', heb:'הוכחת אנושיות', icono:'🧑', color:'#16a085', desc:'Anti-bot, anti-IA, Proof of Personhood.',
    sub: {
      AH1:{n:'CAPTCHA',items:['reCAPTCHA','hCaptcha','Turnstile']},
      AH2:{n:'Proof',items:['Worldcoin','BrightID','Proof of Humanity','Idena']},
      AH3:{n:'Biometría',items:['Iris','Huella','Rostro','Voz','Comportamiento']},
      AH4:{n:'Social',items:['Web of Trust','Vouching','Invitaciones','Reputación']},
      AH5:{n:'Anti-Sybil',items:['Grafos','ML','Behavioral','Anomalías']}
    }
  },
  AI: { titulo:'Verificación de Contenido IA', heb:'אימות תוכן', icono:'🤖', color:'#c0392b', desc:'Cómo distinguir IA de humano.',
    sub: {
      AI1:{n:'Estándares',items:['C2PA','Content Credentials','Provenance','Watermarking']},
      AI2:{n:'Detección',items:['Deepfakes','Texto IA','Imagen','Audio']},
      AI3:{n:'Firma',items:['Criptográfica','Visible','Invisible','Metadata']},
      AI4:{n:'Trazabilidad',items:['Origen','Cadena','Modificaciones','Autoría']},
      AI5:{n:'Ética',items:['Consentimiento','Atribución','Derechos','Transparencia']}
    }
  },
  AJ: { titulo:'Seguros Descentralizados', heb:'ביטוח', icono:'🛡️', color:'#27ae60', desc:'Cobertura ante fallos.',
    sub: {
      AJ1:{n:'Protocolos',items:['Nexus','InsurAce','Etherisc','Bridge']},
      AJ2:{n:'Coberturas',items:['Smart contracts','Custodia','Slashing','Oracle','Governance']},
      AJ3:{n:'Modelos',items:['Mutual','Peer-to-pool','Paramétrico','Reaseguro']},
      AJ4:{n:'Evaluación',items:['Riesgo','Prima','Reclamos','Payout']},
      AJ5:{n:'Legado',items:['Emergencia','Reservas','Auto-seguro']}
    }
  },
  AK: { titulo:'Reputación Portable', heb:'מוניטין', icono:'⭐', color:'#f1c40f', desc:'Llevar tu historial entre plataformas.',
    sub: {
      AK1:{n:'Estándares',items:['W3C VC','DID','Schema.org','ERC-8004']},
      AK2:{n:'Fuentes',items:['Contribuciones','Certificaciones','Validaciones','Feedback']},
      AK3:{n:'Portabilidad',items:['Exportar','Importar','Interop','APIs']},
      AK4:{n:'Privacidad',items:['Selective','ZKP','Datos mínimos','Consentimiento']},
      AK5:{n:'Aplicaciones',items:['Empleo','Crédito','Alquiler','Confianza']}
    }
  },
  AL: { titulo:'Privacidad Diferencial', heb:'פרטיות', icono:'🔒', color:'#2980b9', desc:'Datos agregados sin exponer individuos.',
    sub: {
      AL1:{n:'Técnicas',items:['Laplaciano','Gaussiano','Exponential','Sensitivity']},
      AL2:{n:'Aplicaciones',items:['Censos','Estadísticas','Analytics','Investigación']},
      AL3:{n:'Épsilon',items:['Elección','Trade-off','Composición','Utilidad']},
      AL4:{n:'Implementación',items:['Google DP','OpenDP','DiffPrivLib','Tumult']},
      AL5:{n:'Regulación',items:['GDPR','CCPA','LFPDPPP','Compliance']}
    }
  },
  AM: { titulo:'Computación Confidencial', heb:'מחשוב חסוי', icono:'🔐', color:'#8e44ad', desc:'Cálculo sin exponer datos.',
    sub: {
      AM1:{n:'TEE',items:['Intel SGX','AMD SEV','TrustZone','TDX','SEV-SNP']},
      AM2:{n:'Confidencial',items:['VMs','Enclaves','Multiparty','Homomorphic']},
      AM3:{n:'Aplicaciones',items:['IA','Médico','Finanzas','Gobierno']},
      AM4:{n:'Attestation',items:['Remota','Local','Verificación','Certificados']},
      AM5:{n:'Cloud',items:['Azure','GCP','AWS Nitro','IBM']}
    }
  },
  AN: { titulo:'Redes de Conocimiento', heb:'רשת ידע', icono:'🕸️', color:'#3498db', desc:'Grafos, ontologías y linked data.',
    sub: {
      AN1:{n:'Ontologías',items:['RDF','OWL','SKOS','Schema.org','Dublin']},
      AN2:{n:'Grafos',items:['Neo4j','ArangoDB','Neptune','TigerGraph']},
      AN3:{n:'Linked Data',items:['URIs','Triples','SPARQL','JSON-LD','OpenAPI']},
      AN4:{n:'Aplicaciones',items:['Wikipedia','Wikidata','DBpedia','Google KG']},
      AN5:{n:'Kabaláh',items:['Sefirot','Letras','Conexiones','Ontología']}
    }
  },
  AO: { titulo:'Interfaz Cerebro-Computadora', heb:'ממשק מוח', icono:'🧠', color:'#e84393', desc:'El futuro, ética y límites.',
    sub: {
      AO1:{n:'Tecnologías',items:['EEG','fMRI','Implantes','Neuralink','BCI']},
      AO2:{n:'Aplicaciones',items:['Comunicación','Prótesis','Memoria','Aprendizaje']},
      AO3:{n:'Ética',items:['Consentimiento','Privacidad','Identidad','Autonomía','Límites']},
      AO4:{n:'Riesgos',items:['Hacking','Manipulación','Desigualdad','Dependencia']},
      AO5:{n:'Kabaláh',items:['Mente universal','Noosfera','Akasha','Conciencia']}
    }
  }
};
