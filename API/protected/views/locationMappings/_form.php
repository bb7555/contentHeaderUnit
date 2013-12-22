<?php
/* @var $this LocationMappingsController */
/* @var $model LocationMappings */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'location-mappings-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'content'); ?>
		<?php echo $form->textArea($model,'content',array('rows'=>6, 'cols'=>50)); ?>
		<?php echo $form->error($model,'content'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'lvl_1'); ?>
		<?php echo $form->textField($model,'lvl_1',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'lvl_1'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'lvl_2'); ?>
		<?php echo $form->textField($model,'lvl_2',array('size'=>60,'maxlength'=>255)); ?>
		<?php echo $form->error($model,'lvl_2'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->