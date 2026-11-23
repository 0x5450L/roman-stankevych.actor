# Сайт Романа Станкевича

Одностраничный сайт актёра на **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**.
Сайт собирается в статические файлы, поэтому сервер и бэкенд не нужны: его можно бесплатно разместить на Cloudflare Pages.

## Как запустить у себя

Нужен Node.js 20 или новее (`node -v`).

```bash
npm install      # один раз: скачать зависимости в node_modules
npm run dev      # режим разработки: http://localhost:3000, изменения видны сразу
npm run build    # собрать готовый сайт в папку out/
npm run preview  # посмотреть собранный out/ локально
```

## Где что лежит

```
src/
  app/
    layout.tsx        общий каркас: <html>, шрифты, SEO-теги
    page.tsx          главная страница: просто список секций по порядку
    globals.css       цвета, шрифты, брейкпоинты (дизайн-токены)
  content/
    site.ts           ВЕСЬ контент: тексты, ссылки, видео, фильмография
  components/
    sections/         по файлу на каждую секцию страницы
    video/            плеер Vimeo, который грузится только по клику
    ui/               кнопки, иконки, контейнер, заголовок секции
    ShareCvButton.tsx кнопка «Поделиться резюме»
  lib/vimeo.ts        обложки видео из Vimeo
public/
  cv/                 PDF-резюме (отдаётся по ссылке /cv/...)
  images/             портрет, картинка для превью в соцсетях
```

## Частые правки

- **Поменять текст или ссылку** — `src/content/site.ts`.
- **Добавить видео** — в `reelGroups` добавить `{ title, kind, vimeoId }`. `vimeoId` — число из ссылки `vimeo.com/1234567`.
- **Видео-презентация / английский монолог** — у объекта `presentation` или у строки `English Monologue` вписать `vimeoId` и убрать `soon: true`.
- **Фото в галерею** — положить файлы в `public/images/gallery/` и в массиве `gallery` указать `src: "/images/gallery/имя.webp"`.
- **LinkedIn** — вписать ссылку в `links.linkedin`, иконка появится сама.
- **Обновить резюме** — заменить файл в `public/cv/` (имя оставить тем же).

## Деплой на Cloudflare Pages

Build command: `npm run build`, output directory: `out`. После покупки домена поменять `SITE_URL` в `src/app/layout.tsx`.
