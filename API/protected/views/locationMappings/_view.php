<?php
/* @var $this LocationMappingsController */
/* @var $data LocationMappings */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('id')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->id), array('view', 'id'=>$data->id)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('content')); ?>:</b>
	<?php echo CHtml::encode($data->content); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('lvl_1')); ?>:</b>
	<?php echo CHtml::encode($data->lvl_1); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('lvl_2')); ?>:</b>
	<?php echo CHtml::encode($data->lvl_2); ?>
	<br />


</div>