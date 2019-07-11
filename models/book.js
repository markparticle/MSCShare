import {
    HTTP
} from '../util/http_promise.js'


class BookModel extends HTTP {
    getHotList() {
        return this.request({
            url: 'book/hot_list'
        })
    }

    getMyBookCount() {
        return this.request({
            url: 'book/favor/count'
        })
    }

    getDetail(bookId) {
        return this.request({
            url: `book/${bookId}/detail`
        })
    }

    getLikeStatus(bookId) {
        return this.request({
            url: `/book/${bookId}/favor`
        })
    }

    getComment(bookId) {
        return this.request({
            url: `/book/${bookId}/short_comment`
        })
    }

    postComment(bookId, comment) {
        return this.request({
            url: '/book/add/short_comment',
            method: 'POST',
            data: {
                book_id: bookId,
                content: comment,
            }
        })
    }
}

export {
    BookModel
}