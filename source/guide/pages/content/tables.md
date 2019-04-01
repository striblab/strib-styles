---
title: Tables
layout: page
---

Tables styling

## Default

This example shows the default styling while using some specific elements and classes to display an election results table.

{% example html %}
<table>
  <thead>
    <tr>
      <th><span class="sr-only">Winner</span></th>
      <th>Candidate</th>
      <th class="text-right">Votes</th>
      <th class="text-right">Pct.</th>
    </tr>
  </thead>

  <tbody>
    <tr class="active-row">
      <td>✔</td>
      <td><strong>Amy Klobuchar</strong> (i)</td>
      <td class="text-right">556,430</td>
      <td class="text-right">95.7%</td>
    </tr>
    <tr>
      <td></td>
      <td>Steve Carlson</td>
      <td class="text-right">9,912</td>
      <td class="text-right">1.7%</td>
    </tr>
    <tr>
      <td></td>
      <td>Stephen Emery</td>
      <td class="text-right">7,052</td>
      <td class="text-right">1.2%</td>
    </tr>
    <tr>
      <td></td>
      <td>David Groves</td>
      <td class="text-right">4,503</td>
      <td class="text-right">0.8%</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Striped

{% example html %}
<table class="table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Responsive

Use the `.table-responsive-*` to make the table overflow and scrollable at a specific breakpoint.

{% example html %}
<table class="table-striped table-responsive-md">
  <thead>
    <tr>
      <th>#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>First Name</th><th>Last Name</th><th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td><td>Mark</td><td>Otto</td><td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td><td>Jacob</td><td>Thornton</td><td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td><td>Larry</td><td>the Bird</td><td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}
