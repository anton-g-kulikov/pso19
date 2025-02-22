---
layout: page
title: Мероприятия
permalink: /events/
upcoming_events:
  - date: 2024-05-20
    title: Учения по поиску в лесу
    description: Практические занятия по поиску людей в лесной местности
past_events:
  - date: 2024-04-15
    title: Тренировка по оказанию первой помощи
---

## Ближайшие события

{% for event in page.upcoming_events %}

### {{ event.title }}

**Дата:** {{ event.date | date: "%d.%m.%Y" }}

{{ event.description }}

---

{% endfor %}

## Прошедшие мероприятия

{% for event in page.past_events %}

- **{{ event.title }}** ({{ event.date | date: "%d.%m.%Y" }})
  {% endfor %}

## Хотите организовать мероприятие?

Мы готовы провести обучающее занятие для вашей организации. [Свяжитесь с нами](/contact) для обсуждения деталей.
