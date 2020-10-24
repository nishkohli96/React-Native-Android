import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ContactAvatar = (props) => {
    renderImage = () => {
        const { img, width, height, roundedImage } = props;
        const { imageContainer, image } = styles;

        const viewStyle = [imageContainer];
        if (roundedImage)
            viewStyle.push({ borderRadius: Math.round(width + height) / 2 });
        return (
            <View style={viewStyle}>
                <Image style={image} source={img} />
            </View>
        );
    };

    renderPlaceholder = () => {
        const { placeholder, width, height, roundedPlaceholder } = props;
        const { placeholderContainer, placeholderText } = styles;

        const viewStyle = [placeholderContainer];
        if (roundedPlaceholder)
            viewStyle.push({ borderRadius: Math.round(width + height) / 2 });

        return (
            <View style={viewStyle}>
                <View style={viewStyle}>
                    <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        minimumFontScale={0.01}
                        style={[
                            { fontSize: Math.round(width) / 2 },
                            placeholderText,
                        ]}
                    >
                        {placeholder}
                    </Text>
                </View>
            </View>
        );
    };

    const { img, width, height } = props;
    const { container } = styles;
    return (
        <View style={[container, props.style, { width, height }]}>
            {img ? renderImage() : renderPlaceholder()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    imageContainer: {
        overflow: 'hidden',
        justifyContent: 'center',
        height: '100%',
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: 100,
        height: 100,
    },
    placeholderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dddddd',
        height: '100%',
    },
    placeholderText: {
        fontWeight: '700',
        color: '#ffffff',
    },
});

ContactAvatar.propTypes = {
    img: Image.propTypes.source,
    placeholder: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    roundedImage: PropTypes.bool,
    roundedPlaceholder: PropTypes.bool,
};

ContactAvatar.defaultProps = {
    roundedImage: true,
    roundedPlaceholder: true,
};

export default ContactAvatar;
