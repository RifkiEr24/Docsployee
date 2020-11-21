<template>
<div>
    <div class="row mt-5">
        <div class="col-md-6">
<h4 class="text-dark ">Quick Access</h4>
        </div>
         <div class="col-md-6">
<button class="btn btn-primary float-right rounded-pill text-white py-2"> <i class="fas fa-plus"></i> &nbsp Add Files</button>
        </div>
    </div>
    
<div class="row mt-5">
    <div class="col-md-4">
        <div class="ffolder big cyan">
            <span>KTP</span>
        </div>
    </div>
    <div class="col-md-4">
        <div class="ffolder big pink">
            <span>KK</span>
        </div>
    </div>
    <div class="col-md-4">
        <div class="ffolder big cyan">
            <span>Akte</span>
        </div>
    </div>
</div>
 <h4 class="text-dark mt-5">All Files</h4>
<table class="table mt-3">
  <thead class="bg-primary text-white">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date Modified</th>
      <th scope="col">File Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <i class="fas fa-file text-secondary"></i> &nbsp KTP</td>
      <td>May 23, 2019</td>
      <td>100MB</td>
    </tr>
  <tr>
      <td> <i class="fas fa-file text-secondary"></i> &nbsp Akte</td>
      <td>November 31, 2019</td>
      <td>100MB</td>
    </tr>
  </tbody>
</table>
</div>
</template>