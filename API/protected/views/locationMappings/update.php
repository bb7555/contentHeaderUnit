<?php
/* @var $this LocationMappingsController */
/* @var $model LocationMappings */

$this->breadcrumbs=array(
	'Location Mappings'=>array('index'),
	$model->id=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List LocationMappings', 'url'=>array('index')),
	array('label'=>'Create LocationMappings', 'url'=>array('create')),
	array('label'=>'View LocationMappings', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage LocationMappings', 'url'=>array('admin')),
);
?>

<h1>Update LocationMappings <?php echo $model->id; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>