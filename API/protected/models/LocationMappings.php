<?php

/**
 * This is the model class for table "location_mappings".
 *
 * The followings are the available columns in table 'location_mappings':
 * @property integer $id
 * @property string $content
 * @property string $lvl_1
 * @property string $lvl_2
 * @property string $lvl_3
 * @property string $lvl_4
 */
class LocationMappings extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'location_mappings';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('content, lvl_1, lvl_2, lvl_3, lvl_4', 'required'),
			array('lvl_1, lvl_2, lvl_3, lvl_4', 'length', 'max'=>255),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, content, lvl_1, lvl_2, lvl_3, lvl_4', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'content' => 'Content',
			'lvl_1' => 'Level One URL',
			'lvl_2' => 'Level Two URL',
			'lvl_3' => 'Level Three URL',
			'lvl_4' => 'Level Four URL',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('content',$this->content,true);
		$criteria->compare('lvl_1',$this->lvl_1,true);
		$criteria->compare('lvl_2',$this->lvl_2,true);
		$criteria->compare('lvl_3',$this->lvl_3,true);
		$criteria->compare('lvl_4',$this->lvl_4,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return LocationMappings the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
