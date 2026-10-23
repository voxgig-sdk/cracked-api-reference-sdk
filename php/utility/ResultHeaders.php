<?php
declare(strict_types=1);

// CrackedApiReference SDK utility: result_headers

class CrackedApiReferenceResultHeaders
{
    public static function call(CrackedApiReferenceContext $ctx): ?CrackedApiReferenceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
