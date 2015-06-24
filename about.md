---
layout: page
title: About
permalink: /about/
---

Du bist begeisterter JavaScript Developer? Du stehst auf Frontend-, oder doch eher auf NodeJS / io.js Development? Internet of Things sind dir ein Begriff? Dann komm vorbei! Wir treffen uns regelmäßig und tauschen uns über die aktuellsten Trends im JavaScript-Umfeld aus.

Werde Mitglied auf [meetup.com](http://meetup.com/{{ site.meetup_username }}) und verpasse keines unserer Events.

# Organized by ...

<ul>
{% for member in site.data.team %}
  <li>
    <a href="https://twitter.com/{{ member.twitter }}" target="_blank">
      {{ member.name }}
    </a>
  </li>
{% endfor %}
</ul>
