/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  View, Text, TextInput, TouchableOpacity
} from 'react-native'
import { Controller } from 'react-hook-form'
import propTypes from 'prop-types'
import { styles } from './styles'
import { vh } from '../../common/Dimensions'
import ErrorHandler from '../../common/ErrorHandler'
import { ColorTheme } from '../../common/AppStyles'

function FormTextInput ({
  control,
  name = '',
  rules = {},
  placeholder,
  topText = '',
  multiline = false,
  onItemClick = {},
  icon,
  editable = true,
  preText = '',
  isNumeric = false,
  maxLength = 25
}) {
  return (
    <ErrorHandler componentName="FormTextInput">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
          const textHeadingStyle = value
            ? styles.textColorHeading
            : styles.backgroundQuaternaryEmphasis
          const backgroundColorStyle = error ? styles.errorRed : styles.b

          return (
            <>
              <View
                style={[
                  styles.outerContainer,
                  backgroundColorStyle,
                  { height: multiline ? vh(150) : vh(70) }
                ]}
              >
                <Text style={styles.topTextStyle}>{topText}</Text>
                <View style={{ flexDirection: 'row' }}>
                  {icon
                    ? (
                    <TouchableOpacity
                      style={styles.inputTextContainer}
                      onPress={() => {
                        onItemClick()
                      }}
                    >
                      <Text
                        style={[
                          styles.inputText,
                          {
                            textHeadingStyle
                          }
                        ]}
                      >
                        {' '}
                        {value || placeholder}
                        {' '}
                      </Text>
                    </TouchableOpacity>
                      )
                    : (
                    <View style={styles.horizontalContainer}>
                      {preText ? <Text style={styles.preTextStyle}>{preText}</Text> : null}
                      <TextInput
                        value={value}
                        disabledInputStyle={{ opacity: 1 }}
                        editable={editable}
                        maxLength={maxLength}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        placeholderTextColor={ColorTheme.placeholderColor}
                        multiline
                        style={styles.input}
                        keyboardType={isNumeric ? 'numeric' : 'default'}
                      />
                    </View>
                      )}
                  {icon
                    ? (
                    <TouchableOpacity
                      style={styles.clickItemStyle}
                      onPress={() => {
                        onItemClick()
                      }}
                    >
                      {icon}
                    </TouchableOpacity>
                      )
                    : null}
                </View>
              </View>
              {error && <Text style={styles.errorText}>{error.message || 'Error'}</Text>}
            </>
          )
        }}
      />
    </ErrorHandler>
  )
}

FormTextInput.propTypes = {
  // navigation: propTypes.any,
  control: propTypes.any,
  name: propTypes.any,
  rules: propTypes.any,
  placeholder: propTypes.any,
  topText: propTypes.any,
  multiline: propTypes.any,
  onItemClick: propTypes.any,
  icon: propTypes.any,
  editable: propTypes.any,
  preText: propTypes.any,
  isNumeric: propTypes.any,
  maxLength: propTypes.any
}

export default FormTextInput
