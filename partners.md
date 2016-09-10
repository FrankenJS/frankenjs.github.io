---
layout: page
title: Sponsors
permalink: /sponsors/
inheader: true
titleOnlyLink: true
---

<div class="with-love">

  <h1 class="page-heading">
    Big thanks to all our sponsors!
  </h1>

  {% for partner in site.data.sponsors %}
    <a href="{{ partner.website }}" target="_blank">
      <img
        class="partner"
        src="/assets/sponsors/{{ partner.brand }}"
        alt="{{ partner.name }}"
        title="{{ partner.name }}"/>
    </a>
  {% endfor %}

</div>
