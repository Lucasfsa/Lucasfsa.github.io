<script setup>
</script>

<template>
<div class="container">
    <ul class="timeline">
        <li>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h6 class="timeline-title">Suporte técnico em Tecnologia da Informação</h6>
              <p class="text-muted"> 2016 ~ Curso básico</p>
            <div class="timeline-body">
              <p> Neste curso foi onde eu tive os primeiros contatos com manutenção de micro e redes de computadores. </p>
            </div>
          </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h6 class="timeline-title">Técnico em Informática</h6>
              <p class="text-muted"> 2017 - 2018 ~ Curso técnico</p>
            </div>
            <div class="timeline-body">
              <p>Curso Técnico</p>
            </div>
          </div>
        </li>
        <li >
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h6 class="timeline-title">Sistemas da Informação</h6>
              <p class="text-muted"> 2020 - presente ~ Curso Superior</p>
            </div>
            <div class="timeline-body">
              <p>Curso Superior</p>
            </div>
          </div>
        </li>
        <li  class="timeline-inverted">
          <div class="timeline-panel">
            <diV class="row">
                <div class="col-6">
                    <div class="timeline-heading">
                    <h6 class="timeline-title">Sololearn PHP</h6>
                    <p class="text-muted">2021</p>
                    </div>
                    <div class="timeline-body">
                    <p>Curso de php</p>
                    </div>   
                </div>
                <div class="col-6">
                   <a href="https://www.sololearn.com/certificates/CT-A05FN4XI"> 
                    <img class="img-fluid img-thumbnail" src="/php.jpg" style="width: 100%; height:100%;">
                   </a> 
                </div>
            </diV>
          </div>
        </li>
        <li>
          <div class="timeline-panel">
                <diV class="row">
                    <div class="col-6">
                        <div class="timeline-heading">
                            <h6 class="timeline-title">Sololearn JS</h6>
                            <p class="text-muted">2022</p>
                        </div>

                        <div class="timeline-body">
                            <p>Curso de javascript</p>
                        </div>    
                    </div>
                    
                    <div class="col-6">
                        <a href="https://www.sololearn.com/certificates/CT-0A7BMHZD"> 
                            <img class="img-fluid img-thumbnail" src="/js.png" style="width: 100%; height:100%;">
                        </a> 
                    </div>
                </diV>
            </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h6 class="timeline-title">Laravue Vue.js</h6>
              <p class="text-muted"> 2022</p>
            </div>
            <div class="timeline-body">
                <p>Curso de vue 3</p>
            </div>
          </div>
        </li>
    </ul>
</div>
</template>

<style scoped>
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-panel {
  width: 46%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}
.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}
.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}
.timeline > li > .timeline-badge {
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-badge.primary {
  background-color: #2e6da4 !important;
}
.timeline-badge.success {
  background-color: #3f903f !important;
}
.timeline-badge.warning {
  background-color: #f0ad4e !important;
}
.timeline-badge.danger {
  background-color: #d9534f !important;
}
.timeline-badge.info {
  background-color: #5bc0de !important;
}
.timeline-title {
  margin-top: 0;
  color: inherit;
}
.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}
.timeline-body > p + p {
  margin-top: 5px;
}
</style>