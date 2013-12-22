<?php
/* @var $this LocationMappingsController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Location Mappings',
);

$this->menu=array(
	array('label'=>'Create LocationMappings', 'url'=>array('create')),
	array('label'=>'Manage LocationMappings', 'url'=>array('admin')),
);
?>

<h1>Location Mappings</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
