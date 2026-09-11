# Política de Seguridad

## Versiones Soportadas

| Versión | Soportada |
|---------|-----------|
| 1.x.x   | ✅         |

## Reportar una Vulnerabilidad

**No abras un issue público para reportar vulnerabilidades.**

Envía un correo a **security@yejida.project** con:

1. Descripción de la vulnerabilidad
2. Pasos para reproducirla
3. Impacto potencial
4. Posible solución (si la conoces)

Responderemos en menos de **72 horas**.

## Alcance

Este proyecto implementa:

- **OWASP ASVS Level 2** (Estándar de Verificación de Seguridad)
- **Cifrado AES-256-GCM** para datos locales
- **Content Security Policy** estricta
- **Headers de seguridad** (HSTS, X-Frame-Options, etc.)
- **Sin backend** — todos los cálculos son locales
- **Sin tracking** — cero cookies de terceros

## Fuera de Alcance

- Ataques de fuerza bruta al navegador del usuario
- Vulnerabilidades del sistema operativo
- Vulnerabilidades de GitHub Pages
- Ingeniería social

## Reconocimiento

Los investigadores que reporten vulnerabilidades válidas serán acreditados
en el `SECURITY.md` (con su permiso).