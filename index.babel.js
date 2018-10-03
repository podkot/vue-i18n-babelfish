import BabelFish from 'babelfish';

export default class BabelfishFormatter {
    constructor( options = {} ) {
        this._locale = options.locale || 'ru-RU';
        this._i18n = new BabelFish( this._locale );
        this._added = Object.create( null );

        if ( !options.fallbacks ) {
            return;
        }

        for ( const [key, value] of Object.entries( options.fallbacks ) ) {
            this._i18n.setFallback( key, value );
        }
    }

    interpolate( message, values ) {
        const added = this._added[message];

        if ( !added ) {
            this._i18n.addPhrase( this._locale, message, message );
            this._added[message] = true;
        }

        return [ this._i18n.t( this._locale, message, values ) ];
    }
}
