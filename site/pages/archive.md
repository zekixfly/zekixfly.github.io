---
title: Archives
order: 1
---

<ul class="archive">

{% for post in collections.posts | reverse %}
{% set currentYear = post.date | dateFormat('YYYY') %}
{% set previousPost = collections.posts | getPreviousCollectionItem(post) %}
{% set previousYear = previousPost.date | dateFormat('YYYY') %}
{% if loop.first %}

  <h3>{{ currentYear }}</h3>
{% endif %}
    <li>
        <div class="month">{{ post.date | dateFormat('MMM DD') }}</div>
        <div class="archive-post-title"><a href="{{ post.url }}">{{ post.data.title }}</a></div>
    </li>
{% if loop.last %}
{% elseif currentYear != previousYear %}
  <h3>{{ previousYear }}</h3>
{% endif %}
{% endfor %}
</ul>
