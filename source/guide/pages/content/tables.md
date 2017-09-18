---
title: Tables
layout: page
---

Tables styling

## Default

{% example html %}
<table>
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
