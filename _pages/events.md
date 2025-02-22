---
layout: page
title: Мероприятия
permalink: /events/
upcoming_events:
  - date: "Август 2025"
    title: "Ориентир на спасение"
    description: "Практические занятия по поиску людей в лесной местности"
past_events: []
---

## Ближайшие события

{% for event in page.upcoming_events %}

### {{ event.title }}

**Дата:** {{ event.date | date: "%d.%m.%Y" }}

{{ event.description }}

[Регистрация](https://forms.yandex.ru/u/67b476a002848f83f4274c5f/)

---

{% endfor %}

{% if page.past_events and page.past_events.size > 0 %}

## Прошедшие мероприятия

{% for event in page.past_events %}

- **{{ event.title }}** ({{ event.date | date: "%d.%m.%Y" }})
  {% endfor %}
  {% endif %}

## Хотите организовать мероприятие?

Мы готовы провести обучающее занятие для вашей организации. [Свяжитесь с нами](/contact) для обсуждения деталей.
