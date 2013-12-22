<?php
/* @var $this LocationMappingsController */
/* @var $model LocationMappings */

$this->breadcrumbs=array(
	'Location Mappings'=>array('index'),
	$model->id,
);

$this->menu=array(
	array('label'=>'List LocationMappings', 'url'=>array('index')),
	array('label'=>'Create LocationMappings', 'url'=>array('create')),
	array('label'=>'Update LocationMappings', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete LocationMappings', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage LocationMappings', 'url'=>array('admin')),
);
?>

<h1>View LocationMappings #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'content',
		'lvl_1',
		'lvl_2',
	),
)); ?>
