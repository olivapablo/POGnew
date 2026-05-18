# POG — Content System
### Generador de contenido para Instagram | @prof.olivapablo

App web para generar posts, carruseles e historias de Instagram con IA, basada en los 6 pilares editoriales de la marca POG.

## 🚀 Deploy en GitHub Pages

1. Creá un repositorio nuevo en GitHub (ej: `pog-content`)
2. Subí todos los archivos de esta carpeta
3. Andá a **Settings → Pages**
4. En "Source" seleccioná `main` branch → `/ (root)`
5. Guardá — en 1-2 minutos tu app va a estar en:
   `https://TU-USUARIO.github.io/pog-content/`

## 📁 Estructura
```
/
└── index.html     ← App completa (todo en un solo archivo)
└── README.md      ← Este archivo
```

## ✨ Funcionalidades
- Generador de Posts (1:1), Carruseles (6 slides) e Historias (9:16)
- 6 pilares editoriales con temas pre-cargados
- Sugerencia de temas con IA por pilar
- 4 tonos: Polémico, Rompe mito, Científico, Debate
- Caption listo para copiar y pegar
- Identidad visual POG completa

## 🔑 API Key
La app usa la API de Anthropic. Para que funcione en producción necesitás configurar
un backend o proxy que maneje la API key de forma segura.
Para uso personal/privado podés agregarla directamente en el código (línea del fetch).

---
**POG** · @prof.olivapablo
