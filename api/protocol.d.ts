import * as $protobuf from "protobufjs";
/** Namespace Proto. */
export namespace Proto {

    /** Properties of a Chapter. */
    interface IChapter {

        /** Chapter id */
        id?: (number|null);

        /** Chapter name */
        name?: (string|null);

        /** Chapter thumbnailUrl */
        thumbnailUrl?: (string|null);
    }

    /** Represents a Chapter. */
    class Chapter implements IChapter {

        /**
         * Constructs a new Chapter.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IChapter);

        /** Chapter id. */
        public id: number;

        /** Chapter name. */
        public name: string;

        /** Chapter thumbnailUrl. */
        public thumbnailUrl: string;

        /**
         * Creates a new Chapter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chapter instance
         */
        public static create(properties?: Proto.IChapter): Proto.Chapter;

        /**
         * Encodes the specified Chapter message. Does not implicitly {@link Proto.Chapter.verify|verify} messages.
         * @param message Chapter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IChapter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chapter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chapter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Chapter;
    }

    /** Properties of a Tag. */
    interface ITag {

        /** Tag id */
        id?: (number|null);

        /** Tag name */
        name?: (string|null);
    }

    /** Represents a Tag. */
    class Tag implements ITag {

        /**
         * Constructs a new Tag.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ITag);

        /** Tag id. */
        public id: number;

        /** Tag name. */
        public name: string;

        /**
         * Creates a new Tag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tag instance
         */
        public static create(properties?: Proto.ITag): Proto.Tag;

        /**
         * Encodes the specified Tag message. Does not implicitly {@link Proto.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Tag;
    }

    /** Properties of a Title. */
    interface ITitle {

        /** Title id */
        id?: (number|null);

        /** Title name */
        name?: (string|null);

        /** Title description */
        description?: (string|null);

        /** Title thumbnailUrl */
        thumbnailUrl?: (string|null);

        /** Title likeCount */
        likeCount?: (string|null);
    }

    /** Represents a Title. */
    class Title implements ITitle {

        /**
         * Constructs a new Title.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ITitle);

        /** Title id. */
        public id: number;

        /** Title name. */
        public name: string;

        /** Title description. */
        public description: string;

        /** Title thumbnailUrl. */
        public thumbnailUrl: string;

        /** Title likeCount. */
        public likeCount: string;

        /**
         * Creates a new Title instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Title instance
         */
        public static create(properties?: Proto.ITitle): Proto.Title;

        /**
         * Encodes the specified Title message. Does not implicitly {@link Proto.Title.verify|verify} messages.
         * @param message Title message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ITitle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Title message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Title
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.Title;
    }

    /** Properties of a HomeView. */
    interface IHomeView {

        /** HomeView titlesByTag */
        titlesByTag?: (Proto.HomeView.ITitlesByTag[]|null);
    }

    /** Represents a HomeView. */
    class HomeView implements IHomeView {

        /**
         * Constructs a new HomeView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IHomeView);

        /** HomeView titlesByTag. */
        public titlesByTag: Proto.HomeView.ITitlesByTag[];

        /**
         * Creates a new HomeView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HomeView instance
         */
        public static create(properties?: Proto.IHomeView): Proto.HomeView;

        /**
         * Encodes the specified HomeView message. Does not implicitly {@link Proto.HomeView.verify|verify} messages.
         * @param message HomeView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IHomeView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HomeView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HomeView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.HomeView;
    }

    namespace HomeView {

        /** Properties of a TitlesByTag. */
        interface ITitlesByTag {

            /** TitlesByTag tag */
            tag?: (Proto.ITag|null);

            /** TitlesByTag titles */
            titles?: (Proto.ITitle[]|null);
        }

        /** Represents a TitlesByTag. */
        class TitlesByTag implements ITitlesByTag {

            /**
             * Constructs a new TitlesByTag.
             * @param [properties] Properties to set
             */
            constructor(properties?: Proto.HomeView.ITitlesByTag);

            /** TitlesByTag tag. */
            public tag?: (Proto.ITag|null);

            /** TitlesByTag titles. */
            public titles: Proto.ITitle[];

            /**
             * Creates a new TitlesByTag instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TitlesByTag instance
             */
            public static create(properties?: Proto.HomeView.ITitlesByTag): Proto.HomeView.TitlesByTag;

            /**
             * Encodes the specified TitlesByTag message. Does not implicitly {@link Proto.HomeView.TitlesByTag.verify|verify} messages.
             * @param message TitlesByTag message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Proto.HomeView.ITitlesByTag, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TitlesByTag message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TitlesByTag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.HomeView.TitlesByTag;
        }
    }

    /** Properties of a SearchView. */
    interface ISearchView {

        /** SearchView titles */
        titles?: (Proto.ITitle[]|null);
    }

    /** Represents a SearchView. */
    class SearchView implements ISearchView {

        /**
         * Constructs a new SearchView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ISearchView);

        /** SearchView titles. */
        public titles: Proto.ITitle[];

        /**
         * Creates a new SearchView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchView instance
         */
        public static create(properties?: Proto.ISearchView): Proto.SearchView;

        /**
         * Encodes the specified SearchView message. Does not implicitly {@link Proto.SearchView.verify|verify} messages.
         * @param message SearchView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ISearchView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.SearchView;
    }

    /** Properties of a TitleDetailView. */
    interface ITitleDetailView {

        /** TitleDetailView title */
        title?: (Proto.ITitle|null);

        /** TitleDetailView chapters */
        chapters?: (Proto.IChapter[]|null);
    }

    /** Represents a TitleDetailView. */
    class TitleDetailView implements ITitleDetailView {

        /**
         * Constructs a new TitleDetailView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.ITitleDetailView);

        /** TitleDetailView title. */
        public title?: (Proto.ITitle|null);

        /** TitleDetailView chapters. */
        public chapters: Proto.IChapter[];

        /**
         * Creates a new TitleDetailView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TitleDetailView instance
         */
        public static create(properties?: Proto.ITitleDetailView): Proto.TitleDetailView;

        /**
         * Encodes the specified TitleDetailView message. Does not implicitly {@link Proto.TitleDetailView.verify|verify} messages.
         * @param message TitleDetailView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.ITitleDetailView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TitleDetailView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TitleDetailView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.TitleDetailView;
    }

    /** Properties of a ViewerView. */
    interface IViewerView {

        /** ViewerView chapter */
        chapter?: (Proto.IChapter|null);

        /** ViewerView imageUrls */
        imageUrls?: (string[]|null);
    }

    /** Represents a ViewerView. */
    class ViewerView implements IViewerView {

        /**
         * Constructs a new ViewerView.
         * @param [properties] Properties to set
         */
        constructor(properties?: Proto.IViewerView);

        /** ViewerView chapter. */
        public chapter?: (Proto.IChapter|null);

        /** ViewerView imageUrls. */
        public imageUrls: string[];

        /**
         * Creates a new ViewerView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewerView instance
         */
        public static create(properties?: Proto.IViewerView): Proto.ViewerView;

        /**
         * Encodes the specified ViewerView message. Does not implicitly {@link Proto.ViewerView.verify|verify} messages.
         * @param message ViewerView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Proto.IViewerView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewerView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ViewerView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Proto.ViewerView;
    }
}
