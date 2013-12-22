<?php
/* @var $this LocationMappingsController */
/* @var $model LocationMappings */

$this->breadcrumbs=array(
	'Location Mappings'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List LocationMappings', 'url'=>array('index')),
	array('label'=>'Manage LocationMappings', 'url'=>array('admin')),
);
?>

<h1>Create LocationMappings</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>