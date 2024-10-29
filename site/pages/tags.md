---
title: "Tags List"
order: 2
---

<ul class="tags">
  {% for tag in collections.all | getAllTags | filterTagList %} {% set
  tagUrl%}/tags/{{ tag | slugify }}/{% endset %} {% set count = collections.all
  | getTagsCount(tag) %}
  <li><a href="{{ tagUrl }}" class="post-tag">{{ tag }}({{count}})</a></li>
  {% endfor %}
</ul>
